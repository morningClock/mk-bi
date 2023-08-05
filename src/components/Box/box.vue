<template>
  <div
    class="box"
    :class="[border ? 'box-border' : '']"
    :style="{ flexGrow, padding }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
export interface BoxProps {
  flexGrow?: number;
  border?: boolean;
  padding?: string;
}

withDefaults(defineProps<BoxProps>(), {
  flexGrow: 1,
  border: true,
  padding: "4%",
});
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.box-border {
  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 2%;
    left: 2%;
    width: 111px;
    height: 35px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAAjCAYAAACaX1R3AAABIElEQVRoge3bPWoCURSG4dfE3l2kSpdC8GcbSZHeZQTFFWhrY2NWkkZIKURwFxYiRFAuXJvEcSyEOR/zvTD94TzM3NtM43myx8n1BRybdpOsm4Z+qPsWlDOecMYTznjCGU844wlnPOGMJ5zxhDOecMYTznjCGU844wlnPOGMJ5zxhDOecMbT6/U8sfG0SnCfeeKh8XQ6wz0mOGBkPI3+weHPpkQX4TBe+N6K4DBe6BLcoggO44WtFA7jhewmuFQz/7TQrfe+QnYVjvzmHeu7n7CVwpHx+kAj0PMELIUWnW6DrTvvrxSOoGfeBugBH8BvgHmK2gED4B3YVjFA1AvLARgDHeAnwDx/WwNtYFblENFvm9/ACzANdDbP80yrSqcAThSuKBJCDTY0AAAAAElFTkSuQmCC);
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(180deg);
  }
  &::after {
    content: "";
    position: absolute;
    right: 2%;
    bottom: 2%;
    display: block;
    width: 111px;
    height: 35px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAAjCAYAAACaX1R3AAABIElEQVRoge3bPWoCURSG4dfE3l2kSpdC8GcbSZHeZQTFFWhrY2NWkkZIKURwFxYiRFAuXJvEcSyEOR/zvTD94TzM3NtM43myx8n1BRybdpOsm4Z+qPsWlDOecMYTznjCGU844wlnPOGMJ5zxhDOecMYTznjCGU844wlnPOGMJ5zxhDOecMbT6/U8sfG0SnCfeeKh8XQ6wz0mOGBkPI3+weHPpkQX4TBe+N6K4DBe6BLcoggO44WtFA7jhewmuFQz/7TQrfe+QnYVjvzmHeu7n7CVwpHx+kAj0PMELIUWnW6DrTvvrxSOoGfeBugBH8BvgHmK2gED4B3YVjFA1AvLARgDHeAnwDx/WwNtYFblENFvm9/ACzANdDbP80yrSqcAThSuKBJCDTY0AAAAAElFTkSuQmCC);
  }
}
</style>
