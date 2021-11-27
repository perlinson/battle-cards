<template>
  <draggable :list="hand" class="c-hand" group="field">
    <v-row no-gutters>
      <v-row no-gutters>
        <v-col v-for="c in 10" :key="c" cols="1" offset="">
          <v-img src="obelisk.png" class="grey lighten-2" />
        </v-col>
      </v-row>
    </v-row>
    <!-- <v-row no-gutters class="d-flex flex-nowrap">
      <v-col
        v-for="(item, i) in hand"
        :key="i"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="item.src"
          :lazy-src="item.src"
          aspect-ratio="1"
          max-height="100px"
          containe
          class="grey lighten-2 inline-block"
        >
        </v-img>
      </v-col>
    </v-row>

    <div
      v-for="(item, i) in hand"
      :key="i"
      class="d-flex flex-row justify-center"
    >
      <v-col cols="2">
        <v-img :src="item.src" max-height="200px" contain aspect-ratio="1.5" />
      </v-col>
    </div> -->
  </draggable>
</template>

<script>
export default {
  data() {
    return {
      hand: [
        {
          name: 'card-1',
          src: 'obelisk.png',
          status: '',
          type: '',
          active: false,
          x: 0,
          y: 0,
        },
        {
          name: 'card-2',
          src: 'obelisk.png',
          status: '',
          type: '',
          active: false,
          x: 0,
          y: 0,
        },
        {
          name: 'card-3',
          src: 'obelisk.png',
          status: '',
          type: '',
          active: false,
          x: 0,
          y: 0,
        },
        {
          name: 'card-4',
          src: 'obelisk.png',
          status: '',
          type: '',
          active: false,
          x: 0,
          y: 0,
        },
        {
          name: 'card-5',
          src: 'obelisk.png',
          status: '',
          type: '',
          active: false,
          x: 0,
          y: 0,
        },
        {
          name: 'card-6',
          src: 'obelisk.png',
          status: '',
          type: '',
          active: false,
          x: 0,
          y: 0,
        },
        {
          name: 'card-7',
          src: 'obelisk.png',
          status: '',
          type: '',
          active: false,
          x: 0,
          y: 0,
        },
        {
          name: 'card-8',
          src: 'obelisk.png',
          status: '',
          type: '',
          active: false,
          x: 0,
          y: 0,
        },
      ],
    }
  },
}
</script>

<style></style>
