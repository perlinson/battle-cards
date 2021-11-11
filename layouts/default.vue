<template>
  <v-app>
    <core-app-bar />
    <core-drawer />
    <core-view />
    <core-footer />
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
}
</script>

<style lang="scss" scoped>
.v-app {
  font-family: '楷体', '楷体_GB2312';
  @font-face {
    font-family: '楷体', '楷体_GB2312';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('~assets/fonts/楷体_GB2312.ttf') format('truetype');
  }
}
</style>
