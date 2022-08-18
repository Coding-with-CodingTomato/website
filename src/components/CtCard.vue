<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 100%;
  padding: 0.5rem;

  background-color: var(--dark-color);
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba($color: #000000, $alpha: 0.25);
}
</style>
