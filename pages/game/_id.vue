<template>
  <v-container>
    <h1>Playing Game</h1>
    <h2>IoApi Status : {{ ioApi.ready }}</h2>
    <div v-if="ioApi.ready">
      <div id="notifications">
        <toaster :msg="userJoinedMsg" @toastExpired="ioData.userJoined = ''" />
        <toaster :msg="userLeftMsg" @toastExpired="ioData.userLeft = ''" />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: 'game',
  data() {
    return {
      ioApi: {},
      ioData: {},
      room: this.$route.params.id,
      channels: [],
      users: [],
    }
  },
  computed: {
    userJoinedMsg() {
      return this.ioData.userJoined !== ''
        ? `User ${this.ioData.userJoined} joined room!`
        : ''
    },

    userLeftMsg() {
      return this.ioData.userLeft !== ''
        ? `User ${this.ioData.userLeft} left room!`
        : ''
    },
    gameId() {
      return this.$route.params.id
    },
  },

  watch: {
    'ioApi.ready'(ready) {
      console.log('ioApi.ready', ready)
      if (ready) {
        this.ioApi.join({
          gameId: this.gameId,
          user: this.$auth.user,
        })
      }
    },
    'ioData.users'(users) {
      console.log('users', users)
      this.users = users
    },
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      channel: '/room',
      serverAPI: true,
    })

    // this.socket.on('connect', () => {
    //   this.socket.emit('join', { player: this.$auth.user })
    // })
  },
}
</script>

<style></style>
