<template>
  <div class="search-deck">
    <!-- <div
      v-for="card in cardsFound"
      :key="card.id"
      class="search-card"
      @mouseover="showCard(card)"
    >
      <img :src="card.card_images[0].image_url" />
      <div>
        {{ card.name }}<br />
        <v-btn class="ma-1" color="primary" @click="addCardToDeck(card)"
          >Add</v-btn
        >
        <v-btn class="ma-1" @click="addCardToDeck(card, true)">Side</v-btn>
      </div>
    </div> -->

    <Card
      v-for="(card, index) in cards"
      :key="index"
      :img-src="card.image_url"
    ></Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image_url: 'slifer.png',
        },
        {
          image_url: 'ra.png',
        },
        {
          image_url: 'obelisk.png',
        },
        {
          image_url: 'slifer.png',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
