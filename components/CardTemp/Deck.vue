<template>
  <div class="c-deck">
    <Card
      :name="deck[0].name"
      :src="deck[0].src"
      :status="deck[0].status"
      :type="deck[0].type"
    />
  </div>
</template>

<script>
export default {
  props: ['deck'],
}
</script>

<style lang="sass">
.c-deck
  padding: 4px
  display: inline-block
  width: 100%
  border: 3px dashed transparent
</style>
