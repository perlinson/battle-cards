<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="6">
        <v-card width="100%" class="mx-auto">
          <v-card-title>
            <small class="headline">卡牌库</small>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="搜索"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn icon @click.native="createDialog.visiable = true">
              <v-icon large>mdi-plus</v-icon>
            </v-btn>
          </v-card-title>

          <v-layout wrap justify-space-between>
            <v-row>
              <v-col
                v-for="(card, index) in cards"
                :key="index"
                cols="12"
                lg="2"
                md="4"
                sm="6"
              >
                <v-card outlined class="pa-2" min-height="300px">
                  <v-card-title class="align:center">
                    {{ card.name }}
                  </v-card-title>
                  <v-card-text>
                    <p>
                      {{ card.content }}
                    </p>
                  </v-card-text>
                  <v-card-text>
                    <v-progress-linear
                      color="light-blue"
                      height="15"
                      :value="card.life"
                      rounded
                    >
                      <template #default="{ value }">
                        <strong>{{ value }}/100</strong>
                      </template>
                    </v-progress-linear>
                  </v-card-text>
                  <v-divider class="mx-4"></v-divider>
                  <v-card-actions>
                    <v-btn text color="primary">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn text color="error">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>

    <!-- <v-row no-gutters justify="space-between">
      <v-col cols="2">
        <v-card v-for="n in 20" :key="n">
          <v-card-title>
            <v-card-title-primary>Card</v-card-title-primary>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vel mi ut felis tempus commodo.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="primary">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text color="error">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row> -->

    <v-row>
      <v-col cols="4" lg="3" md="2" sm="1">
        <v-dialog v-model="createDialog.visiable" width="auto" persistent>
          <v-card>
            <v-card-title>
              <span class="headline">新建卡牌</span>
            </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="createDialog.name"
                label="卡牌名称"
                required
              ></v-text-field>
              <v-text-field
                v-model="createDialog.content"
                label="content"
                required
              ></v-text-field>
              <v-text-field
                v-model="createDialog.image"
                label="卡牌图片"
                required
              ></v-text-field>
              <v-text-field
                v-model="createDialog.life"
                label="life"
                required
              ></v-text-field>
              <v-text-field
                v-model="createDialog.cost"
                label="cost"
                required
              ></v-text-field>
              <v-text-field
                v-model="createDialog.attack"
                label="attack"
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="createDialog.visiable = false"
              >
                取消
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="createDialog.visiable = false"
              >
                创建
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const cards = await $axios.get('/api/cards').then((res) => res.data)
    return { cards }
  },
  data() {
    return {
      search: '',
      createDialog: {
        visiable: false,
        name: '',
        description: '',
        image: '',
      },
    }
  },
  methods: {
    showCreateDialog() {
      this.createDialog.visiable = true
    },
  },
}
</script>

<style></style>
