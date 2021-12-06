<template>
  <v-card light min-height="450">
    <v-img height="100px" :src="image" aspect-ratio="2.5">
      <v-card-title class="font-weight-black">{{
        $t(value.title)
      }}</v-card-title>
    </v-img>
    <v-tabs
      v-model="isTab"
      :scrollable="true"
      :centered="true"
      :height="40"
      color="yellow"
      class="elevation-0"
    >
      <v-tab>
        <v-badge inline left :color="objColor" :content="objCount">
          <v-icon>mdi-information</v-icon>
        </v-badge>
      </v-tab>
      <v-tab>
        <v-icon>mdi-information</v-icon>
      </v-tab>
      <v-tab>
        <v-icon>mdi-information</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="isTab">
      <v-tab-item><Objects :value="value.objects" /></v-tab-item>
      <!-- <v-tab-item><Units :v-model="value.units" /></v-tab-item>
      <v-tab-item><Info :v-model="value.info" /></v-tab-item> -->
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  props: {
    value: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      isTab: true,
    }
  },
  computed: {
    image() {
      return this.$store.state.game.headers[this.value.image]
    },
    objCount() {
      return this.value.objects?.length || 0
    },
    objColor() {
      if (!this.value.objects || this.value.objects.length === 0)
        return 'grey darken-4'
      return this.value.objects.filter((object) => object?.owner !== 'kingdom')
        .length > 0
        ? 'red'
        : 'grey darken-4'
    },
  },
}
</script>

<style></style>
