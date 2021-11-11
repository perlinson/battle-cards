<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex>
        <v-card>
          <v-card-title primary-title>
            <v-flex xs12>
              <div>
                <div>
                  <form id="owncard" @submit.prevent="sendPost">
                    <br />
                    <v-text-field offset-xs4
                      v-model="cardTitle"
                      label="Card Name"
                    ></v-text-field>

                    <img :src="cardImageURL" height="150" v-if="cardImageURL" />
                    <v-text-field
                      v-model="cardImageURL"
                      label="Card Image URL"
                    ></v-text-field>

                    <v-textarea
                      v-model="cardDesc"
                      name="input-7-1"
                      label="Card Description"
                      value=""
                      hint="Write card description here"
                    ></v-textarea>

                    <v-text-field
                      v-model="cardAtk"
                      label="ATK"
                      type="number"
                      min="0"
                    ></v-text-field>

                    <v-text-field
                      v-model="cardDef"
                      label="Def"
                      type="number"
                      min="0"
                    ></v-text-field>

                    <v-btn text @click="sendPost" class="grey lighten-2"
                      >Submit</v-btn
                    >
                  </form>
                </div>
              </div>
            </v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cardTitle: '',
      fileUpload: true,
      cardImageURL: '',
      cardDesc: '',
      imageName: '',
      cardAtk: 0,
      cardDef: 0,
    }
  },
  methods: {
    sendPost() {
      const sendBody = {
        title: this.cardTitle,
        desc: this.cardDesc,
        isFile: this.fileUpload,
        imgURL: this.cardImageURL,
        file: this.imageFile,
        atk: +this.cardAtk,
        def: +this.cardDef,
      }
      this.$http
        .post('/api/cards', sendBody)
        .then((response) => {
          alert('Good. Now admin will see your card and register it.')
          this.$router.push(`cards/${response.data.id}`)
        })
        .catch((e) => {
          console.error(e)
          alert('Error!')
        })
    },
    handleFileUpload(e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.cardImageURL = fr.result
          this.imageFile = files[0] // this is an image file that can be sent to server...
        })
      }
    },
    pickFile() {
      this.$refs.image.click()
    },
  },
}
</script>
