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
      <GameButton @click="handleClick" :disabled="!canPlay" :text="'Play'" />
      <GameButton @click="handleClick" :disabled="!canPlay" :text="'Play'" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['gamestate', 'playerData'],
  methods: {
    handleClick: function () {
      // return this.playerData.hand;
    },
  },

  data: function () {
    return {
      playerHand: this.playerData.hand,
      canPlay: this.playerData.canPlay,
    }
  },

  computed: {
    playerHand: function () {
      return this.playerData.hand;
    },
    canPlay: function () {
      return this.playerData.canPlay;
    },
  },
  watch: {
    "gameState.phase"() {
      this.playerHand = newVal.hand;
      this.canPlay = newVal.canPlay;
    },
  },
}
</script>

<style></style>
