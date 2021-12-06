<template>
  <v-row>
    <v-col v-for="(location, key, index) in locations" :key="key">
      <component
        :is="location.kind"
        v-if="location"
        :key="key"
        v-model="locations[key]"
        :index="index"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'AdventureLayout',
  computed: {
    locations() {
      return this.$store.state.game.locations
    },
  },
}
</script>

<style></style>
