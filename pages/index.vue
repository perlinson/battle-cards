<template>
  <div></div>
</template>

<script>
export default {
  asyncData({ store, route }) {},
  data() {
    return {
      callCards: [],
    }
  },
  methods: {
    async updateDatabase() {
      await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        .then((res) => res.json())
        .then((cardData) => {
          this.$store.dispatch('card/updateCards', cardData.data)
        })
    },
  },
}
</script>
