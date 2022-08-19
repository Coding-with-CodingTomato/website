<template>
  <div class="footer">
    <RouterLink to="/impressum">Impressum</RouterLink>
    <RouterLink to="/datenschutz">Datenschutzerklärung</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.footer {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
