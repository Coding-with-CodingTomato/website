<script setup lang="ts">
import { RouterLink } from 'vue-router';
import CtLogo from '../assets/CtLogo.png';
</script>

<template>
  <div class="navbar">
    <div class="item"><img :src="CtLogo" /></div>
    <div class="item title">CodingTomato</div>
    <div class="item links">
      <RouterLink to="/">Startseite</RouterLink>
      <RouterLink to="/commands">Kommandos</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  width: 100%;
  height: 100%;
  background-color: var(--dark-color);
  padding: 0 1rem 0 1rem;

  display: grid;
  grid-template-columns: 30px 20% auto;
  gap: 0.5rem;

  box-shadow: 0px 0px 4px rgba($color: #000000, $alpha: 0.25);
}

.item {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  &.title {
    justify-content: flex-start;
    font-weight: 700;
  }

  &.links {
    gap: 1rem;
    justify-content: flex-end;

    a {
      text-decoration: none;
      color: var(--text-color);
    }

    a.router-link-active {
      color: var(--primary-color);
    }
  }

  img {
    height: 25px;
  }
}

@media screen and (max-width: 480px) {
  .navbar {
    grid-template-columns: 30px auto;
  }
  .title {
    display: none;
  }
}
</style>
