<template>
  <div>
    <h2>{{ card.name }}</h2>
    <div><small>{{card.type}}</small></div>
    {{ card.desc }}
    <br>
  </div>
</template>

<script>
  export default {
    props: {
      card: Object,
    }
  }
</script>