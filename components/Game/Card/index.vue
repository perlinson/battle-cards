<template>
  <v-lazy
    v-model="isActive"
    class="d-inline-block"
    :options="{
      threshold: 0.5,
    }"
    :min-height="card_size.h"
    transition="fade-transition"
  >
    <v-hover>
      <transition name="zoomin">
        <v-card
          class="d-inline-block mx-1 yu-card"
          :width="card_size.w"
          :height="card_size.h"
          transition="scale-transition"
          @mouseenter="getCardInfo"
          @mouseleave="resetCardHover"
        >
          <v-img
            :src="card.card_images[0].image_url_small"
            contain-enter-active
            aspect-ratio="1"
            :width="card_size.w"
            :height="card_size.h"
            @click="onClick"
          >
          </v-img>
        </v-card>
      </transition>
    </v-hover>
  </v-lazy>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    isActive: false,
    card_size: {
      w: 72,
      h: 105,
    },
    menu_model: false,
    move_places: [
      {
        to: 'main',
        text: 'Main deck',
      },
      {
        to: 'side',
        text: 'Side deck',
      },
      {
        to: 'all_cards',
        text: 'All cards',
      },
    ],
  }),
  methods: {
    ...mapMutations('card', [
      'setCurrentCard',
      'setCurrentCard_doHover',
      'resetCurrentCard_doHover',
    ]),

    getCardInfo() {
      const card = this.card
      this.setCurrentCard_doHover(card)
      setTimeout(() => {
        this.setCurrentCard(card)
      }, 100)
    },
    resetCardHover() {
      const card = this.card
      this.resetCurrentCard_doHover(card)
    },
    onClick() {
      this.$emit('click', this.card)
    },
    moveCard(to) {
      // let { id } = this.card,
      //   deck_id = this.deck_id,
      //   where_iam = this.where_iam,
      //   places = ["main", "side"];
      // if (deck_id) {
      //   if (places.includes(to)) {
      //     this.fb.decks.doc(deck_id).update({
      //       [to]: this.fb.firebase.firestore.FieldValue.arrayUnion(id),
      //       [where_iam]: this.fb.firebase.firestore.FieldValue.arrayRemove(id),
      //     });
      //     this.$emit("card_updated");
      //   } else {
      //     this.fb.decks.doc(deck_id).update({
      //       [where_iam]: this.fb.firebase.firestore.FieldValue.arrayRemove(id),
      //     });
      //     this.$emit("card_updated");
      //   }
      // } else {
      //   console.log("Please select a deck first");
      // }
    },
  },
}
</script>
