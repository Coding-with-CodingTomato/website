<template>
  <div class="chip" :style="{ backgroundColor: props.color }">
    <span><slot></slot></span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  color: { type: String, required: false, default: '#242424' },
});
</script>

<style scoped lang="scss">
.chip {
  border-radius: 5px;
  font-size: 13px;
  padding: 0 0.25rem 0 0.25rem;
  box-shadow: 0px 0px 4px rgba($color: #000000, $alpha: 0.25);
  height: min-content;
  width: fit-content;
}
</style>
