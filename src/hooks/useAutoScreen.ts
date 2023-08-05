import { onBeforeUnmount, onMounted } from "vue";

type ScreenAutoOptions = {
  designWidth: number;
  designHeight: number;
};

//数据大屏自适应函数
const handleScreenAuto = (el: HTMLElement, options: ScreenAutoOptions) => {
  const designWidth = options.designWidth; //设计稿的宽度
  const designHeight = options.designHeight; //设计稿的高度
  //根据屏幕的变化适配的比例
  const scale =
    document.documentElement.clientWidth /
      document.documentElement.clientHeight <
    designWidth / designHeight
      ? document.documentElement.clientWidth / designWidth
      : document.documentElement.clientHeight / designHeight;
  //缩放比例
  el.style.transform = `scale(${scale}) translate(-50%, -50%)`;
};

export const useAutoScreen = (
  selector: HTMLElement | string,
  options: ScreenAutoOptions = {
    designWidth: 1920,
    designHeight: 1080,
  }
) => {
  onMounted(() => {
    let el =
      typeof selector === "string"
        ? (document.querySelector(selector) as HTMLElement)
        : selector;
    if (el !== null) {
      handleScreenAuto(el, options);
      window.onresize = () => handleScreenAuto(el, options);
    }
  });
  onBeforeUnmount(() => {
    window.onresize = null;
  });
};
