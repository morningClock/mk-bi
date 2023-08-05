import screenfull from "screenfull";

export const useScreenFull = () => {
  const toggleFullScreen = (el: Element) => {
    if (screenfull.isEnabled) {
      screenfull.toggle(el);
    }
  };

  return { toggleFullScreen, isFullscreen: screenfull.isFullscreen };
};
