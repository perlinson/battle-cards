<!-- 我的场地 -->
<template>
  <v-card class="d-flex flex-column">
    <v-row class="d-flex">
      <v-col cols="3">
        <oppo-deck />
      </v-col>
      <v-col cols="6">
        <oppo-monster-zone />
      </v-col>
      <v-col cols="3">
        <oppo-graveyard />
      </v-col>
    </v-row>
    <v-row class="d-flex">
      <v-col cols="3">
        <oppo-exile />
      </v-col>
      <v-col cols="6">
        <oppo-magic-trap-zone />
      </v-col>
      <v-col cols="3">
        <oppo-graveyard />
      </v-col>
    </v-row>
    <oppo-hand />
  </v-card>
</template>

<script>
export default {}
</script>

<style></style>
