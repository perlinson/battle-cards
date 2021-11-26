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
  data: () => ({
    drawer: null,
  }),
}
</script>
