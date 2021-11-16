<template>
  <v-container fluid pt-16>
    <v-row justify="center">
      <v-card class="elevation-12" outlined width="1000">
        <v-card-title style="background-color: #007bc7">
          <small>游戏列表</small>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn icon @click="getAllGames()">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
          <v-btn icon @click="createDialog.visible = true">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="deleteItems">
            <small>删除选定的游戏</small>
          </v-btn>
        </v-card-title>

        <!-- Data Table -->
        <v-data-table
          :headers="headers"
          :items="games"
          :search="search"
          :items-per-page="10"
          dense
          show-select
        >
          <!-- Watch or Join Button -->
          <template #[`item.action`]="{ item }">
            <v-btn text color="primary" @click="handleActionClick(item)">
              {{ item.status == 'Playing' ? 'WATCH' : 'JOIN' }}
            </v-btn>
          </template>

          <!-- <template #action="{ item }">
            <b-button
              variant="default"
              class="mr-xs"
              size="sm"
              @click="editRecord(item, headers)"
              >Edit</b-button
            >
            <b-button
              variant="default"
              class="mr-xs"
              size="sm"
              @click="deleteRecord(item)"
              >Delete</b-button
            >
          </template> -->
        </v-data-table>
      </v-card>
    </v-row>
    <v-dialog v-model="joinDialog.visible" persistent max-width="500px">
      <v-card>
        <v-card-title class="blue">
          <strong>游戏名称: {{ joinDialog.game.name }}</strong>
        </v-card-title>
        <v-card-text>
          <v-card-subtitle>
            <h3>当前玩家数目</h3>
          </v-card-subtitle>
          <v-list>
            <v-list-item
              v-for="(player, i) in joinDialog.game.players"
              :key="i"
            >
              <v-list-item-content class="pl-4">
                -- {{ player.name }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-text-field
            v-model="joinDialog.yourname"
            label="Your name"
            outlined
          >
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeJoinDialog"
            ><small>关闭</small></v-btn
          >
          <v-btn color="blue darken-1" text @click="joinGame">Join</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="createDialog.visible" persistent max-width="500px">
      <v-card>
        <v-card-title class="blue"> <small>创建游戏</small> </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="createDialog.name"
            autofocus
            label="Game name"
            outlined
            class="pt-4"
            @keydown.enter="createGame"
          >
          </v-text-field>
          <v-text-field
            v-model="createDialog.creator"
            label="Creator name"
            outlined
            @keydown.enter="createGame"
          >
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeCreateDialog"
            ><small>取消</small>
          </v-btn>
          <v-btn color="blue darken-1" text @click="createGame"
            ><small>创建 & 加入</small>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const games = await $axios.get('/api/games').then((res) => res.data.rows)
    const players = await $axios
      .get('/api/players')
      .then((res) => res.data.rows)
    return { games, players }
  },

  data() {
    return {
      search: '',
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Creator', value: 'creator' },
        { text: '# of Players', value: 'players.length' },
        { text: 'Status', value: 'status' },
        { text: 'Action', value: 'action' },
      ],
      games: [],
      joinDialog: {
        visible: false,
        headers: [{ text: 'Player Name' }],
        game: {},
        yourname: '',
      },
      createDialog: {
        visible: false,
        name: 'Joshon',
        creator: 'my',
      },
    }
  },
  methods: {
    async getAllGames() {
      // let res = await unoService.getAllGames();
      // this.games = res.data;
    },

    async joinGameOnLoad(gameid) {},

    handleActionClick(game) {
      this.$snackbar(`You clicked ${game.name}`)
    },

    clearJoinDialog() {
      this.joinDialog.game = {}
      this.joinDialog.yourname = ''
    },

    closeJoinDialog() {
      this.joinDialog.visible = false
      this.clearJoinDialog()
    },

    closeCreateDialog() {
      this.createDialog.visible = false
    },

    async joinGame() {
      this.joinDialog.visible = false

      await this.$store.dispatch('joinGame', {
        gameid: this.joinDialog.game.id,
        name: this.joinDialog.yourname,
      })

      // let res = await unoService.joinGame(
      //   this.joinDialog.game.id,
      //   this.joinDialog.yourname
      // )
      // this.clearJoinDialog()
      // if (res.data.token && res.data.game) {
      //   localStorage.set('token', res.data.token)
      //   this.$router.push({ path: `/game/${res.data.game.game_id}` })
      // } else {
      //   //show the snack with your error message (just local)
      //   bus.$emit('updateSnack', 'Failed to create & join game')
      // }
    },

    createGame() {
      if (!this.createDialog.name) {
        // show the snack with your error message (just local)
        this.$snackbar('Undefined Game name')
        return
      }
      if (!this.createDialog.creator || this.createDialog.creator === '') {
        // show the snack with your error message (just local)
        this.$snackbar('updateSnack', 'Undefined Creator Name')
        return
      }

      this.$axios.$post('/api/games/', {
        name: this.createDialog.name,
        creator: this.createDialog.creator,
      })

      this.createDialog.visible = false

      // let res = await unoService.newGame(
      //   this.createDialog.name,
      //   this.createDialog.creator
      // )
      // if (res.data.token && res.data.game) {
      //   localStorage.set('token', res.data.token)
      //   this.$router.push({ path: `/game/${res.data.game.game_id}` })
      // } else {
      //   //show the snack with your error message (just local)
      //   bus.$emit('updateSnack', 'Failed to create & join game')
      // }
    },
    deleteItems() {},
  },
}
</script>

<style></style>
