<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-badge v-if="limit !== 3" color="red accent-4" :content="limit" overlap>
        <img
          :src="card.card_images[0].image_url"
          v-bind="attrs"
          v-on="on"
          :alt="card.name"
        />
      </v-badge>
      <v-img
        v-else
        :src="card.card_images[0].image_url"
        v-bind="attrs"
        v-on="on"
        :alt="card.name"
        contain
        class="grey lighten-2"
      />
    </template>
    <span>{{ card.name }}</span>
  </v-tooltip>
</template>

<script>
import CardHelper from '@/helpers/cardHelper'

export default {
  props: {
    card: Object,
  },

  data() {
    return {
      limit: CardHelper.checkBanlist(this.$props.card),
    }
  },
  methods: {},
}
</script>
