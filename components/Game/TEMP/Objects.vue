<template>
  <v-card v-if="value && value.length > 0">
    <v-row justify="center">
      <v-expansion-panels accordion>
        <Object
          v-for="(obj, key) in value"
          :key="key"
          :value="value[key]"
          :index="index"
        />
      </v-expansion-panels>
    </v-row>
  </v-card>
  <v-card v-else>
    <v-card-text>
      {{ $t('objectsNotPresent') }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    value: { type: Array, default: () => [] },
    index: { type: Number, default: 0 },
  },
}
</script>

<style></style>
