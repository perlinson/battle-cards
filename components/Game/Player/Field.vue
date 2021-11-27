<!-- 我的场地 -->
<template>
  <v-card class="d-flex flex-column">
    <v-row class="d-flex">
      <v-col cols="3">
        <player-deck />
      </v-col>
      <v-col cols="6">
        <player-monster-zone />
      </v-col>
      <v-col cols="3">
        <player-graveyard />
      </v-col>
    </v-row>
    <v-row class="d-flex">
      <v-col cols="3">
        <player-exile />
      </v-col>
      <v-col cols="6">
        <player-magic-trap-zone />
      </v-col>
      <v-col cols="3">
        <player-graveyard />
      </v-col>
    </v-row>
    <player-hand />
  </v-card>
</template>

<script>
export default {}
</script>

<style></style>
