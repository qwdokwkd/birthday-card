import { useCallback, useEffect, useRef } from "react";

import { useRealHeight } from "@/shared/hooks/useRealHeight";
import { HeartsBackground } from "@/shared/ui";

import { MainMenu } from "@/widgets/main-menu";
import { PhotoGallery } from "@/widgets/photo-gallery";
import { Playlist } from "@/widgets/playlist";
import { usePage } from "@/shared/providers";

import "./App.scss";
import { LetterIntro } from "@/widgets/letter-intro";
import { LetterAccept } from "@/widgets/letter-accept";
import { LetterWrongChoice } from "@/widgets/letter-wrong-choice";
import { LetterText } from "@/widgets/letter-text";

import { buildClassName } from "@/shared/lib";

import MeowMp3 from "@/shared/assets/audio/meow.mp3";
import CuteSongMp3 from "@/shared/assets/audio/cute-song.mp3";
import WhimsySongMp3 from "@/shared/assets/audio/whimsy-song.mp3";
import { useMediaPermissions } from "@/shared/hooks/useMediaPermissions";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const mediaPermitted = useMediaPermissions(audioRef);

  useRealHeight();

  const { page } = usePage();

  useEffect(() => {
    if (!mediaPermitted) return;
    audioRef.current?.play();
  }, [mediaPermitted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let src = "";

    switch (page) {
      case 0:
        src = MeowMp3;
        break;
      case 1:
        src = CuteSongMp3;
        break;
      case 6:
        src = WhimsySongMp3;
        break;
      default:
        src = "";
    }

    if (audio.src !== src) {
      audio.src = src;
      audio.load();

      if (mediaPermitted) {
        audio.play().catch(() => {});
      }
    }
  }, [page, mediaPermitted]);

  const renderPage = useCallback(() => {
    switch (page) {
      case 0:
        return <MainMenu key={0} />;
      case 1:
        return <PhotoGallery key={1} />;
      case 2:
        return <Playlist key={2} />;
      case 3:
        return <LetterIntro key={3} />;
      case 4:
        return <LetterAccept key={4} />;
      case 5:
        return <LetterWrongChoice key={5} />;
      case 6:
        return <LetterText key={6} />;
      default:
        return <></>;
    }
  }, [page]);

  return (
    <div className={buildClassName("app")}>
      <audio className="app__audio" loop autoPlay ref={audioRef}></audio>
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
      {page === 0 && <HeartsBackground />}
    </div>
  );
};

export default App;
