<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">
        <slot name="header"></slot>
      </div>
    </div>
    <div class="card-content">
      <div class="card-content-inner">
        <slot></slot>
      </div>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
