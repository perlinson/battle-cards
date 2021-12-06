<template>
  <div>
    <v-navigation-drawer
      id="app-drawer"
      v-model="inputValue"
      :src="image"
      light
      app
      class="pb-8"
      mini-variant-width="80"
      mobile-breakpoint="991"
      :mini-variant="false"
      persistent
      width="320px"
    >
      <v-card
        height="100%"
        class="pb-2"
        flat
        tile
        loader-height="8"
        :loading="$store.state.currentCard_loading"
      >
        <div v-if="card">
          <div class="text-center">
            <v-img
              class="d-inline-block"
              width="320"
              height="466.698"
              :src="card.card_images[0].image_url"
            >
              <template #placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </div>
          <v-card-text class="py-0">
            <v-list-item class="pa-0 ma-0 wrap" :three-line="card.level > 0">
              <v-list-item-content>
                <v-list-item-title v-text="card.name"></v-list-item-title>
                <v-list-item-subtitle v-text="card.type"></v-list-item-subtitle>
                <v-list-item-subtitle v-if="card.level > 0">
                  <v-rating
                    readonly
                    :value="card.level"
                    :length="card.level"
                    dense
                    small
                    color="yellow darken-4"
                    full-icon="mdi-star-circle"
                  >
                  </v-rating>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <div
              class="mt-2"
              v-html="
                card.desc.replace(
                  '----------------------------------------',
                  '<br><hr class=my-1>'
                )
              "
            ></div>
          </v-card-text>
        </div>
        <div v-else class="text-center">
          <div>
            <v-img
              class="d-inline-block"
              width="320"
              height="466.698"
              src="backface.png"
            >
              <template #placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </div>
          <v-card-text>
            <v-skeleton-loader type="heading" loading></v-skeleton-loader>
            <v-divider class="my-4"></v-divider>
            <v-skeleton-loader type="paragraph" loading></v-skeleton-loader>
          </v-card-text>
        </div>
      </v-card>
      <v-footer v-if="card && card.atk && card.def" class="d-block" absolute>
        <v-layout>
          <v-row>
            <v-col class="py-0">
              <span> <v-icon>mdi-sword</v-icon> / </span>
              <span v-text="card.atk"></span>
            </v-col>
            <v-col cols="auto" class="py-0">
              <span v-text="card.def"></span>
              <span> \ <v-icon>mdi-shield-half-full</v-icon> </span>
            </v-col>
          </v-row>
        </v-layout>
      </v-footer>
    </v-navigation-drawer>
  </div>
</template>

<script>
// Utilities
import { mapMutations, mapState } from 'vuex'

export default {
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),

  computed: {
    ...mapState('app', ['image', 'color']),
    card: {
      get() {
        return this.$store.state.card.currentCard
      },
    },
    inputValue: {
      get() {
        return this.$store.state.app.drawer
      },
      set(val) {
        this.setDrawer(val)
      },
    },
  },

  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
  },
}
</script>
