<script setup lang="ts">
import CtNavbar from './components/CtNavbar.vue';
import CtFooter from './components/CtFooter.vue';
</script>

<template>
  <div class="app">
    <CtNavbar />
    <RouterView />
    <CtFooter />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 5vh auto 3vh;
}
</style>
