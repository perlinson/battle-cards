<template>
  <div>
    <h2>You're in home page</h2>
  </div>
</template>
<script>
export default {
  mounted() {
    // this.socket = this.$nuxtSocket({
    //   channel: '/index',
    // })
    // /* Listen for events: */
    // this.socket.on('someEvent', (msg, cb) => {
    //   /* Handle event */
    // })
  },
  methods: {
    method1() {
      /* Emit events */
      this.socket.emit(
        'method1',
        {
          hello: 'world',
        },
        (resp) => {
          /* Handle response, if any */
        }
      )
    },
  },
}
</script>
<style></style>
