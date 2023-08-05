<template>
  <div class="screen-wrapper">
    <div class="screen shadow-2xl" id="screen">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAutoScreen } from "@/hooks/useAutoScreen";
// 适配屏幕
useAutoScreen("#screen");
</script>

<style lang="scss" scoped>
$headerFontSize: 24px;
.screen-wrapper {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  .screen {
    position: absolute;
    width: 1920px; //设计稿的宽度
    height: 1080px; //设计稿的高度
    top: 50%;
    left: 50%;
    transform-origin: top left;
    transform: translate(-50%, -50%);
    background-color: inherit;
  }
}
</style>
