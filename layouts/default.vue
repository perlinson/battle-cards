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

<style lang="scss" scoped></style>
