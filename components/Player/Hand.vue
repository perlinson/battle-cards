<template>
  <!-- <v-row transition="scale-transition">
    <v-col v-for="(card, index) in cards" :key="index" class="d-flex">
      <v-img
        :src="card.image_url"
        :lazy-src="card.image_url"
        class="grey lighten-2 sx-2"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row> -->

  <v-layout row nowrap>
    <v-flex xs3 sm1 md1 v-for="(card, i) in cards" :key="i">
      <v-img
        @mouseenter.prevent="previewCard(card)"
        class="d-flex flex-nowrap"
        :src="card.image_url"
        :lazy-src="card.image_url"
      >
      </v-img>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['cards'],
  methods: {
    handleClick() {
      // return this.playerData.hand;
    },
    previewCard(card) {
      this.$store.dispatch('game/preview_card', card)
    },
  },

  data() {
    return {}
  },
  watch: {
    'gameState.phase'(old, newVal) {
      this.playerHand = newVal.hand
      this.canPlay = newVal.canPlay
    },
  },
}
</script>

<style></style>
