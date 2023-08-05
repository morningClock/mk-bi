<template>
  <div class="boxs" :style="{ flexDirection: direction }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
export interface BoxsWrapperProps {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
}

withDefaults(defineProps<BoxsWrapperProps>(), {
  direction: "column",
});
</script>

<style lang="scss" scoped>
.boxs {
  display: flex;
  height: 100%;
  & > :deep(.box) {
    flex: 1;
  }
  & > :deep(.boxs) {
    flex: 1;
  }
}
</style>
