<template>
  <div class="player-hand-container">
    <div class="player-hand">
      <Card
        v-for="(card, index) in playerHand"
        :key="index"
        @click="handleClick"
      ></Card>
    </div>
    <div class="button-container">
      <v-btn @click="handleClick" :disabled="!canPlay" :text="'Play'" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['gamestate', 'playerData'],
  methods: {
    handleClick() {
      // return this.playerData.hand;
    },
  },

  // data() {
  //   return {
  //     playerHand: this.playerData.hand,
  //     canPlay: this.playerData.canPlay,
  //   }
  // },

  computed: {
    playerHand() {
      return this.playerData.hand
    },
    canPlay() {
      return this.playerData.canPlay
    },
  },
  watch: {
    'gameState.phase'(oldVal, newVal) {
      this.playerHand = newVal.hand
      this.canPlay = newVal.canPlay
    },
  },
}
</script>

<style></style>
