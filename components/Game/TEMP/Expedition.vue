<template>
  <v-card width="300" min-height="450">
    <v-img height="100px" :src="image">
      <v-card-title class="font-weight-black">{{
        $t(value.title)
      }}</v-card-title>
    </v-img>
    <v-tabs v-model="tab" height="35" dark color="yellow" fixed-tabs>
      <v-tab>
        <v-btn icon>
          <v-img src="scroll.png" max-height="26" max-width="26" />
        </v-btn>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-card-text>
        <div class="my-3">{{ $t(value.text) }}</div>
        <div v-for="(res, key) in value.resources" :key="key" class="my-3">
          <div v-if="res > 0">
            <v-row>
              <v-col class="font-weight-black">{{
                $t('resources.' + key)
              }}</v-col>
              <v-spacer />
              <v-col> {{ res }} </v-col>
              <v-col> <v-btn x-small>+1</v-btn> </v-col>
              <v-col> <v-btn x-small>+Max</v-btn> </v-col>
            </v-row>
          </div>
        </div>
      </v-card-text>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  props: {
    value: { type: Object, default: () => ({}) },
  },

  data: () => ({
    tab: true,
  }),

  computed: {
    image() {
      return this.$store.state.game.headers[this.value.image]
    },
  },
}
</script>
