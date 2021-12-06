<template>
  <v-card outlined width="100%">
    <v-layout column class="pa-0" justify-space-between>
      <v-flex>
        <p class="font-weight-bold mt-15">
          Check out some of today’s popular shots
        </p>
      </v-flex>
      <v-layout wrap justify-space-between>
        <v-row>
          <PlayerCard v-for="(Card, i) in gallery" :key="i"> </PlayerCard>
        </v-row>
      </v-layout>
      <v-flex v-if="!loading" class="d-flex justify-center my-10">
        <v-btn
          color="#f3f3f4"
          large
          depressed
          class="font-weight-bold px-12"
          @click="gallery.push(PlayerCard, PlayerCard, PlayerCard, PlayerCard)"
          >Load more Shots</v-btn
        >
      </v-flex>
      <v-flex
        v-else
        id="loading-bkp"
        class="d-flex justify-center align-center"
      >
        <v-img
          contain
          max-width="22"
          class="mr-2"
          src="https://img.icons8.com/offices/64/000000/dribbble.png"
        />
        <span>Loading more...</span>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import PlayerCard from '../Player/Card.vue'

export default {
  data() {
    return {
      loading: true,
      gallery: [
        PlayerCard,
        PlayerCard,
        PlayerCard,
        PlayerCard,
        PlayerCard,
        PlayerCard,
        PlayerCard,
        PlayerCard,
        PlayerCard,
        PlayerCard,
        PlayerCard,
        PlayerCard,
        PlayerCard,
        PlayerCard,
        PlayerCard,
        PlayerCard,
      ],
    }
  },
  mounted() {
    window.onscroll = () => {
      const element = document.querySelector('#loading-bkp').offsetTop
      const pos = window.pageYOffset

      if (this.gallery.length <= 28) {
        if (pos * 2 + 300 >= element) {
          this.gallery.push(
            PlayerCard,
            PlayerCard,
            PlayerCard,
            PlayerCard,
            PlayerCard,
            PlayerCard,
            PlayerCard,
            PlayerCard
          )
        }
      } else {
        this.loading = !this.loading
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.card-info .v-icon + span {
  font-size: 13px;
}
</style>
