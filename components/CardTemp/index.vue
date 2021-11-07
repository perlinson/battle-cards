<template>
  <div class="c-card">
    <div class="c-card-item">
      <div class="c-card-item__inner" :class="status">
        <figure class="c-card-front">
          <img :src="src" :alt="name">
          <!-- figcaption>{{name}}</figcaption -->
        </figure>
        <figure class="c-card-back">
          <img src="back.png" alt="">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    name: String,
    src: String,
    status: String
  },
  methods: {
    onClick() {
    }
  },
}
</script>

<style lang="sass">
.c-card
  width: 100%
.c-card-item
  width: 100%
  &__inner
    position: relative
    transition: transform 0.5s
    transform-style: preserve-3d
    // &:hover, &:focus
    //   transform: rotateY(-180deg)
    &.back
      transform: rotateY(-180deg)
    &.none
      display: none
.c-card-back, .c-card-front
  border-radius: 4px
  position: absolute
  border: 1px solid #333
  top: 0
  left: 50%
  backface-visibility: hidden
.c-card-front
  width: 100%
  margin: 0
  padding: 8px
  transform: translateX(-50%)
  figcaption
    padding-top: 4px
  img
    max-width: 100%
    width: 100%
    border-radius: 4px
    vertical-align: bottom
.c-card-back
  width: 100%
  left: 50%
  padding: 8px
  transform: translateX(-50%) rotateY(180deg)
  img
    max-width: 100%
    width: 100%
    border-radius: 4px
    vertical-align: bottom
</style>
