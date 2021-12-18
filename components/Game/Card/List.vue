<template>
  <v-card v-if="cards && cards.length > 0">
    <card
      v-for="card in cards"
      :key="card.id"
      class="pb-2"
      :card="card"
      @click="handleClick"
    ></card>
  </v-card>
  <v-card v-else>
    <v-card-text>
      <p>卡组是空的</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(card) {
      console.log('handleClick', card)
      this.$emit('chooseCard', card)
    },
  },
}
</script>
