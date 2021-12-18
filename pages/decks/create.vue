<template>
  <v-container>
    <v-row no-gutters>
      <v-text-field
        v-model="currDeck.name"
        append-icon="mdi-microphone"
        class="mx-1"
        flat
        hide-details
        label="输入卡组名称"
        solo-inverted
      ></v-text-field>
    </v-row>
    <v-row>
      <v-card style="width: 100vw">
        <v-toolbar flat prominent>
          <v-text-field
            append-icon="mdi-microphone"
            class="mx-1"
            flat
            hide-details
            label="查找卡牌"
            prepend-inner-icon="mdi-magnify"
            solo-inverted
          ></v-text-field>

          <template #extension>
            <v-tabs v-model="tabs">
              <v-tab> 基础卡组 </v-tab>
              <v-tab> 种族限定卡组 </v-tab>
              <v-tab> 职业限定卡组 </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>
        <v-tabs-items v-model="tabs">
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>基础卡牌列表</p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-title class="text-h5"> An awesome title </v-card-title>
              <card-list
                :cards="baseCards"
                @chooseCard="addSelectedCard"
              ></card-list>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-title class="text-h5">
                An even better title
              </v-card-title>
              <v-card-text>
                <p>职业限定列表</p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-row>
    <v-row>
      <v-card flat>
        <v-card-title
          >已选卡牌（{{ editedDeck.cards.length }} / 40）</v-card-title
        >
        <v-card-text>
          <p>卡组列表</p>
          <card-list
            :cards="editedDeck.cards"
            @chooseCard="removeSelectCard"
          ></card-list>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row>
      <v-btn @click="addDeck">创建卡组</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  async asyncData({ $content }) {
    const baseCards = await $content('card').limit(100).fetch()
    return {
      baseCards,
    }
  },

  data() {
    return {
      tabs: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      columns: 3,
      filter: {
        name: 'Latest',
        val: {
          field: 'created_at',
          order: 'DESC',
        },
      },
      filters: [
        { name: 'Latest', val: { field: 'created_at', order: 'DESC' } },
        { name: 'Oldest', val: { field: 'created_at', order: 'ASC' } },
        {
          name: 'Random',
          val: {
            field: 'created_at',
            order: 'RAND',
            random: Math.floor(Math.random() * 1000) + 1,
          },
        },
        {
          name: 'Cards',
          val: {
            field: 'cards_count',
            order: 'DESC',
            orderByCount: { model: 'Deck', relation: 'cards' },
          },
        },
      ],
      infiniteId: +new Date(),
      editedDeck: {
        name: '',
        description: '',
        cards: [],
      },
    }
  },
  computed: {
    ...mapGetters('deck', ['allDecks', 'selectedCards']),
  },
  watch: {
    query() {
      if (this.$route.query.q !== this.query) {
        this.changeRoute()
      }
    },
    filter() {
      this.changeRandom()
      if (this.$route.query.filter !== this.filter.name) {
        this.changeRoute()
      }
    },
  },
  mounted() {
    if (this.$route.query.filter) {
      this.filter = this.filters.find((obj) => {
        return obj.name === this.$route.query.filter
      })
    }
  },
  methods: {
    ...mapActions('deck', [
      'fetchDecks',
      'addDeck',
      'updateCurrDeck',
      'addSelectedCard',
      'removeSelectCard',
    ]),
    async infiniteHandler($state) {
      try {
        const findQueries = {
          page: this.page,
          filter: this.filter.val,
          query: this.query,
        }
        this.cleanQueriesProperties(findQueries)
        const decks = await this.$store.dispatch('deck/decks', findQueries)
        if (decks.data.length && this.page < decks.paginatorInfo.lastPage) {
          this.$store.commit('decks/decksPageIncrement')
          $state.loaded()
        } else if (decks.data.length === 0 && decks.paginatorInfo.lastPage) {
          $state.complete()
        } else {
          $state.loaded()
          $state.complete()
        }
      } catch (errors) {}
    },
    changeFilter() {
      this.$store.commit('deck/resetDecks')
      this.$store.commit('deck/resetDecksPage')
      this.infiniteId += 1
    },
    changeRandom() {
      if (this.filter.name === 'Random') {
        this.filter.val.random = Math.floor(Math.random() * 1000) + 1
      }
    },
    cleanQueriesProperties(obj) {
      delete obj.filter.name
      for (const propName in obj) {
        if (
          obj[propName] === null ||
          obj[propName] === undefined ||
          obj[propName] === ''
        ) {
          delete obj[propName]
        }
      }
    },
    changeRoute() {
      this.$router.replace({
        query: { q: this.query, filter: this.filter.name },
      })
    },
    chooseCard(card) {
      this.selectedCards.push(card)
    },
  },
}
</script>

<style></style>
