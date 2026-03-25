import { useEffect } from "react";

export const useRealHeight = () => {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();

    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", setVh);
    }

    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", setVh);
      }
    };
  }, []);
};
