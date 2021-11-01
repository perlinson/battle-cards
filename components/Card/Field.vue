<template>
  <div class="c-field">
    <draggable :list="field" class="c-field" group="field">
      <div v-for="(item, i) in field" :key="i" class="c-field__item">
        <CardArea
          :name="item.name"
          :src="item.src"
          :status="item.status"
          :active="item.active"
          :type="item.type"
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
  props: ['field'],
  mounted() {},
}
</script>

<style lang="sass">
.c-field
  display: flex
  width: 100%
  &__item
    width: calc(100% / 5)
</style>
