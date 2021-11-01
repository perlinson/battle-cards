<template>
  <div class="c-graveyard">
    <Card
      :name="graveyard[0].name"
      :src="graveyard[0].src"
      :status="graveyard[0].status"
      :type="graveyard[0].type"
    />
  </div>
</template>

<script>
export default {
  props: ['graveyard'],
}
</script>

<style lang="sass">
.c-graveyard
  padding: 4px
  display: inline-block
  width: 100%
  border: 3px dashed transparent
</style>
