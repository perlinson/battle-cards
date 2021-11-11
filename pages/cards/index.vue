<template>
  <v-container>
    <v-dialog v-model="dialog" max-width="355" persistent>
      <v-container class="d-block">
        <v-row no-gutters align="center" justify="space-between">
          <v-row no-gutters>
            <h3>Add Board</h3>
          </v-row>
          <v-icon @click="dialog = false">mdi-close</v-icon>
        </v-row>
        <v-form ref="form" v-model="valid">
          <div class="d-flex flex-column">
            <v-text-field
              label="Board title"
              name="title"
              type="text"
              :rules="[(v) => !!v || 'Board title is required']"
              required
              v-model="board.title"
            ></v-text-field>
            <v-btn
              v-if="enableColor === false"
              depressed
              @click="enableColor = true"
            >
              Choose board color
            </v-btn>
            <br />
            <v-color-picker
              v-if="enableColor === true"
              v-model="board.color"
              dot-size="25"
              hide-inputs
              swatches-max-height="100"
            ></v-color-picker>
            <div
              class="
                d-flex
                flex-column
                align-center
                justify-center
                flex-grow-1
                upload-block
              "
              @click="chooseImage"
              :style="`background-image: url('${
                board.image.downloadURL ? board.image.downloadURL : ''
              }');height:150px;background-size: cover;background-position: center;`"
            >
              <template
                v-if="!fileToUpload.progress || fileToUpload.progress == 0"
              >
                <v-icon>mdi-camera</v-icon>
                <p>Add a board background</p>
                <input
                  type="file"
                  accept="jpg, jpeg, png"
                  ref="boardBackground"
                  multiple
                  color="#f66f26"
                  buffer-value="0"
                  @click="onFileClicked($event)"
                  @change="onFileSelected($event)"
                  style="display: none"
                />
              </template>
              <template
                v-else-if="
                  fileToUpload.progress > 0 && fileToUpload.progress < 100
                "
              >
                <div class="text-center">
                  <v-progress-circular
                    :size="50"
                    color="green"
                    indeterminate
                  ></v-progress-circular>
                </div>
              </template>
            </div>
            <v-btn :disabled="!valid" color="primary" @click="createBoard"
              >Submit</v-btn
            >
          </div>
        </v-form>
      </v-container>
    </v-dialog>
    <div class="d-flex flex-row align-center justify-space-between">
      <h1>My Boards</h1>
      <v-btn small depressed @click="addBoard">ADD BOARD</v-btn>
    </div>
    <div class="d-flex flex-wrap align-center justify-start">
      <p v-if="boards.length === 0">You have no boards yet.</p>
      <v-card
        :style="
          board.image.downloadURL != ''
            ? `background:url(${board.image.downloadURL});`
            : board.color
            ? `background-color:${board.color}`
            : ''
        "
        @click="$router.push('/boards/' + board.id)"
        class="jello-board-tile"
        v-for="board in boards"
        v-bind:key="board.id"
      >
        <v-card-title
          :style="board.image.downloadURL != '' ? 'color:#fff' : ''"
        >
          {{ board.title }}
        </v-card-title>
        <v-card-subtitle
          :style="board.image.downloadURL != '' ? 'color:#fff' : ''"
        >
          created {{ board.dateCreated | formatDate }}
        </v-card-subtitle>
      </v-card>
    </div>
    <v-snackbar
      :timeout="3000"
      v-model="snackbar"
      absolute
      bottom
      color="primary"
    >
      {{ snackbarText }}
    </v-snackbar>
  </v-container>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  data() {
    return {
      enableColor: false,
      dialog: false,
      valid: false,
      board: {
        title: '',
        color: '',
        image: {
          name: '',
          originalName: '',
          downloadURL: '',
          uuid: '',
        },
      },
      snackbar: false,
      snackbarText: 'No error message',
      currentImageId: '',
      fileToUpload: {},
      boards: [],
    }
  },

  created() {},
  methods: {
    createBoard() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.board.image.uuid = uuidv4()
          this.board.image.downloadURL = this.fileToUpload.downloadURL
          this.$store.dispatch('createBoard', this.board)
          this.dialog = false
          this.snackbar = true
          this.snackbarText = 'Board created'
        }
      })
    },
    onFileClicked(e) {
      e.target.value = null
    },
    onFileSelected(e) {
      this.fileToUpload = {
        name: e.target.files[0].name,
        originalName: e.target.files[0].name,
        size: e.target.files[0].size,
        type: e.target.files[0].type,
        progress: 0,
        uuid: uuidv4(),
      }
      this.uploadFile(e.target.files[0])
    },
    uploadFile(file) {
      // const storageRef = firebase.storage().ref()
      // const uploadTask = storageRef
      //   .child(`images/${this.fileToUpload.uuid}`)
      //   .put(file)
      // uploadTask.on(
      //   firebase.storage.TaskEvent.STATE_CHANGED,
      //   (snapshot) => {
      //     this.fileToUpload.progress =
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      //   },
      //   (error) => {
      //     console.log(error)
      //   },
      //   () => {
      //     this.fileToUpload.downloadURL = uploadTask.snapshot.downloadURL
      //     this.fileToUpload.progress = 100
      //   }
      // )
    },

    chooseImage() {
      this.$refs.boardBackground.click()
    },

    onColorChange(color) {
      this.board.color = color
    },

    addBoard() {
      this.dialog = true
    },
  },
}
</script>

<style>
/* .ingame-bg {
  background-image: url('https://cdn-www.bluestacks.com/bs-images/yu-gi-oh_banner.jpg');
  background-size: contain;
  min-height: 626px;
} */

.v-dialog {
  border-radius: 15px;
  background-color: white;
  padding: 15px;
}
.upload-block {
  border: 2px dashed #adadad;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 20px;
}
</style>
