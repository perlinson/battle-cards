// 卡组创建器

<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="deep-purple accent-4"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>


    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  layout: 'creator',
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

  methods: {
    changeTab(tab) {
      this.tab = tab
    },
  },
}
</script>

<style>
.creator-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: darkcyan;
}
</style>
