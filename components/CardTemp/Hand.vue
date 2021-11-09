<template>
  <div class="c-hand">
    <draggable :list="hand" class="c-hand" group="field">
      <div v-for="(item, i) in hand" :key="i" class="c-hand__item">
        <CardArea
          :name="item.name"
          :src="item.src"
          :status="item.status"
          :type="item.type"
          :active="item.active"
          :x="item.x"
          :y="item.y"
          :fn="item.fn"
        />
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  props: ['hand'],
}
</script>

<style lang="sass">
.c-hand
  display: flex
  width: 100%
  &__item
    width: calc(100% / 5)
</style>
