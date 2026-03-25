import { useEffect, useRef } from "react";

import "./HeartsBackground.scss";

const HeartsBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;

    if (!background) return;

    const count = 6;
    const styles = [
      { top: "15%", left: "20%" },
      { top: "45%", left: "5%" },
      { bottom: "5%", left: "25%" },
      { top: "15%", right: "20%" },
      { top: "45%", right: "5%" },
      { bottom: "5%", right: "25%" },
    ];

    for (let i = 0; i < count; i++) {
      const img = document.createElement("img");

      img.src = "./app/bg-heart.webp";
      img.classList.add(`app__background-heart--${i + 1}`);
      img.style = Object.entries(styles[i])
        .map(([key, value]) => `${key}:${value}`)
        .join(";");

      background.appendChild(img);
    }

    return () => {
      background?.replaceChildren();
    };
  }, []);

  return <div className="hearts-background" ref={backgroundRef}></div>;
};

export default HeartsBackground;
