<template>
  <div>
    <game-board :player-hand="playerHand" :opponent-hand="playerHand" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const playerHand = await $content('card').limit(10).fetch()
    const playedCards = await $content('card').skip(10).limit(1).fetch()
    return {
      playerHand,
      playedCards,
    }
  },
}
</script>
