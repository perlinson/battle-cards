/* eslint-disable vue/require-prop-type-constructor */
<template>
  <div
    class="c-cardArea"
    :class="active && 'active'"
    @click="handleClick($event)"
  >
    <Card :name="name" :src="src" :status="status" />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    src: String,
    status: String,
    active: Boolean,
    type: String,
    x: String | Number,
    y: String | Number,
    fn: Function,
  },
  methods: {
    handleClick(e) {
      console.log(e)
      if (this.fn === undefined && this.fn == null && this.fn === '') return
      this.fn(
        this.name,
        this.src,
        this.status,
        this.x,
        this.y,
        this.type,
        this.active,
        e.target
      )
    },
  },
}
</script>

<style lang="sass">
.c-cardArea
  padding: 4px
  display: inline-block
  width: 100%
  border: 3px dashed transparent
  &:hover, &:focus
    border: 3px dashed #333
    cursor: pointer
  &.active
    border: 3px dashed #333
    cursor: pointer
  *
    pointer-events: none
</style>
