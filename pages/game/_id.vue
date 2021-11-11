<template>
  <v-container>
    <h1>Playing Game</h1>
    <h2>IoApi Status : {{ ioApi.ready }}</h2>
  </v-container>
</template>

<script>
export default {
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
  },
  watch: {
    async 'ioApi.ready'(ready) {
      if (ready) {
        await this.ioApi.join({
          gameId: this.id,
        })
      }
    },
    'ioData.users'(users) {
      this.users = users
    },
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      channel: '/game',
      serverAPI: true,
    })
  },
}
</script>

<style></style>
