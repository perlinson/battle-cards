<template>
  <v-container fill-height>
    <div>
      <div>
        <!-- Cards container -->
        <template v-for="(card, i) in cards">
          <card :key="i" :card="card"></card>
        </template>
      </div>
      <v-divider class="my-2"></v-divider>
      <!-- <div class="text-center">
        <v-pagination
          next-icon="mdi-menu-right"
          prev-icon="mdi-menu-left"
          v-model="current_page"
          :length="pages"
          total-visible="10"
        ></v-pagination>
      </div> -->
    </div>
  </v-container>
</template>

<script>
export default {
  layout: 'GameLayout',
  async asyncData({ $content, params }) {
    const cards = await $content('card').limit(100).fetch()
    return {
      cards,
    }
  },
  data() {
    return {
      search: '',
      createDialog: {
        visiable: false,
        name: '',
        description: '',
        image: '',
      },
    }
  },
  methods: {
    showCreateDialog() {
      this.createDialog.visiable = true
    },
  },
}
</script>

<style></style>
