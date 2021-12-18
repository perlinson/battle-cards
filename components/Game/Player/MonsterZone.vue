<template>
  <draggable
    id="monster-zone"
    class="card cardPlaceholder"
    group="player"
    :list="monsters"
    v-bind="dragOptions"
    :empty-insert-threshold="100"
    @start="dragging = true"
    @end="onDrop"
    @change="log"
  >
    <!-- Korten i spelarens hand. Drag and drop-funktionen är bara aktiv om det är spelarens tur. -->
    <transition-group id="monster-zone" type="transition" name="card-holder">
      <li v-for="card in monsters" :key="card.id" :value="card.id" class="card">
        <card :card="card"></card>
      </li>
    </transition-group>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  props: {
    monsters: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    dragOptions() {
      return {
        animation: 300,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      }
    },
  },
  methods: {
    onDrop(evt) {
      // this.dragging = false
      // this.$gsap.to(evt.to, { rotation: 27, x: 100, duration: 1 })
    },
    log(evt) {
      console.log(evt)
    },
  },
}
</script>

<style>
.card-holder {
  text-align: center;
  white-space: nowrap;
  padding: 0em;
}
</style>
