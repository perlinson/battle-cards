<template>
  <v-app id="app" dark>
    <v-navigation-drawer
      v-model="drawer"
      app
      width="300"
      color="transparent"
      class="pr-12"
    >
      <v-text-field
        background-color="grey lighten-1"
        dense
        flat
        hide-details
        rounded
        solo
      ></v-text-field>
      <v-img
        :src="selectedCard.image_url"
        :lazy-src="selectedCard.image_url"
        class="grey lighten-2"
      />
    </v-navigation-drawer>

    <v-navigation-drawer app clipped right color="transparent">
      <v-list>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-content>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!--  -->
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    drawer: null,
    // selectedCard: {
    //   image_url:
    //     'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png',
    // },
  }),

  computed: {
    selectedCard() {
      return this.getSelectedCard()
    },
  },

  methods: {
    ...mapGetters('game', {
      getSelectedCard: 'getSelectedCard',
    }),
  },
}
</script>

<style lang="scss">
#app {
  background-image: url('https://cdn-www.bluestacks.com/bs-images/yu-gi-oh_banner.jpg');
}
</style>
