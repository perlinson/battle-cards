<template>
  <div>
    <v-app>
      <v-card>
        <v-tabs
          v-model="tab"
          background-color="deep-purple accent-4"
          centered
          dark
          icons-and-text
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">
            Designer
            <v-icon>mdi-phone</v-icon>
          </v-tab>
          <v-tab href="#tab-2">
            Simulator
            <v-icon>mdi-Designer</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
            <Nuxt />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'tab-1',
      text: 'Hello',
      tabs: [
        {
          text: 'Designer',
          icon: 'mdi-phone',
          value: 'tab-1',
        },
        {
          text: 'Simulator',
          icon: 'mdi-Designer',
          value: 'tab-2',
        },
      ],
    }
  },
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css');
</style>
