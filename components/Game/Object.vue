<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <v-container>
        <v-row align="baseline" no-gutters>
          <v-icon small :color="color(value.owner)">
            {{ icon(value.owner) }}
          </v-icon>
          <div class="font-weight-black">
            {{ $t(Name) }}
          </div>

          <div v-if="level" class="ps-3">
            <v-icon small color="grey lighten-1"> mdi-star-outline </v-icon>
            {{ value.level }}
          </div>

          <v-spacer />

          <div v-if="value.autoOrder">
            <v-icon small color="grey lighten-1"> mdi-script-outline </v-icon>
            <v-icon small color="grey lighten-1"> mdi-cog </v-icon>
          </div>
          <div v-else>
            <v-icon small color="grey lighten-1"> mdi-script-outline </v-icon>
            {{ value.orders }}
          </div>
        </v-row>
      </v-container>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card flat>
        <v-card-text>
          <v-row>
            {{ $t(description) }}
          </v-row>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import config from '@/configs'
export default {
  props: {
    value: { type: Object, default: () => ({}) },
    index: { type: Number, default: 0 },
  },
  data() {
    return {}
  },
  computed: {
    Name() {
      return `${this.$t(`${this.value.owner}_${this.value.name}`)}`
    },
    description() {
      return 'descriptions.' + this.value.action + this.value.level
    },
  },
  methods: {
    icon(owner) {
      return config.icons[owner].icon
    },

    color(owner) {
      return config.icons[owner].color
    },
  },
}
</script>

<style></style>
