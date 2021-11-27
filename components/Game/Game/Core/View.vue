<template>
  <v-main>
    <v-container id="core-view" fill-height fluid>
      <v-fade-transition mode="out-in">
        <nuxt></nuxt>
      </v-fade-transition>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'CoreView',

  metaInfo() {
    return {
      title: 'Vue Material Dashboard by CreativeTim',
    }
  },
}
</script>
