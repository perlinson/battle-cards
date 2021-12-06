<template>
  <div>
    <div>
      <v-row>
        <v-col
          v-for="(deck, index) in decks"
          :key="'deck' + index"
          sm="6"
          cols="12"
          md="3"
        >
          <deck-list-item :deck="deck"></deck-list-item>
        </v-col>
      </v-row>
    </div>
    <!-- <infinite-loading
      :identifier="infiniteId"
      spinner="spiral"
      @infinite="infiniteHandler"
    >
      <div slot="no-more">No more decks</div>
      <div slot="no-results">No decks</div>
    </infinite-loading> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
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
    }
  },
  computed: {
    ...mapGetters('deck', ['decks']),
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
    ...mapActions('deck', ['fetchDecks']),
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
  },
}
</script>

<style></style>
