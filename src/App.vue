<script setup lang="ts">
import CtNavbar from './components/CtNavbar.vue';
</script>

<template>
  <div class="app">
    <CtNavbar />
    <RouterView />
  </div>
</template>

<style scoped>
.app {
  width: 100%;

  display: grid;
  grid-template-rows: 5vh auto;
}
</style>
