import { useEffect, useState, type RefObject } from "react";

export function useMediaPermissions(
  audioRef: RefObject<HTMLAudioElement | null>,
) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const unlock = () => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.play().catch(() => {});
      setUnlocked(true);
    };

    window.addEventListener("pointerdown", unlock, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlock);
    };
  }, [audioRef]);

  return unlocked;
}
