<template>
  <v-app>
    <!-- Appbar -->
    <v-app-bar app color="indigo" dark flat clipped-left hide-on-scroll dense>
      <v-row>
        <v-col
          v-for="(res, key, index) in resources"
          :key="index"
          class="text-caption"
        >
          <v-icon> {{ getIcon(key) }}</v-icon>
          {{ res }}
        </v-col>
      </v-row>
      <v-spacer />
    </v-app-bar>
    <core-view />
  </v-app>
</template>

<script>
import config from '../configs'

export default {
  computed: {
    resources() {
      return this.$store.state.game.resources
    },
  },

  methods: {
    getIcon(resName) {
      return config.icons[resName].icon
    },
  },
}
</script>
