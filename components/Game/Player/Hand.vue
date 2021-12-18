<template>
  <draggable
    id="player-hand"
    class="card-holder"
    :class="{ correct: correctMove, wrong: wrongMove }"
    group="player"
    :list="playerHand"
    v-bind="dragOptions"
    :empty-insert-threshold="100"
    @start="dragging = true"
    @end="onDrop"
    @change="log"
  >
    <!-- Korten i spelarens hand. Drag and drop-funktionen är bara aktiv om det är spelarens tur. -->
    <transition-group id="hand" type="transition" name="card-holder">
      <li v-for="card in hand" :key="card.id" :value="card.id" class="card">
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
    hand: {
      type: Array,
      default: () => [],
      required: true,
    },
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
    onDrop(e) {
      console.log('onDrop', e.to)
      this.dragging = false
      this.$gsap.to(e.to, { duration: 1 })
    },
    log(e) {
      console.log('log', e)
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

.correct {
  animation-name: correctmove;
  animation-duration: 1s;
}
@keyframes correctmove {
  0% {
    background-color: grey;
  }
  50% {
    background-color: green;
  }
  100% {
    background-color: grey;
  }
}
.wrong {
  animation-name: wrongmove;
  animation-duration: 1s;
}
@keyframes wrongmove {
  0% {
    background-color: grey;
  }
  50% {
    background-color: red;
  }
  100% {
    background-color: grey;
  }
}
</style>
