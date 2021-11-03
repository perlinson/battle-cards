<template>
  <div>
    <el-row>
      <el-button type="btn-primary" @click="getMessage">GetMessage</el-button>
    </el-row>
    <Room />
  </div>
</template>

<script>
export default {
  data() {
    return {
      socket: null,
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({ name: 'home' })
  },
  methods: {
    getMessage() {
      this.socket.emit('getMessage')
    },
  },
}
</script>
