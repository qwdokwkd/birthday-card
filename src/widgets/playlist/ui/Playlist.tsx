import { Button, Card } from "@/shared/ui";
import { usePage } from "@/shared/providers";

import { useCallback } from "react";

import "./Playlist.scss";

const Playlist: React.FC = () => {
  const { updatePage } = usePage();

  const onNextClick = useCallback(() => {
    updatePage(3);
  }, [updatePage]);

  return (
    <div className="playlist">
      <Card
        className="playlist__card"
        title="the best playlist just for you"
        subtitle={"♪—（≧∇≦）—♪"}
      >
        <div className="playlist__card-content">
          <video disablePictureInPicture loop autoPlay width={300}>
            <source src="./playlist/cat-2.webm" type="video/webm" />
          </video>
          <a
            className="playlist__card-link"
            href="https://open.spotify.com/playlist/31MeL4uVetYfiEjsOZ1ImD?si=NMbTy-59TL-US09iYn2Png&pi=7TQBIwFATBa7E"
            target="about:blank"
          >
            {">>> check playlist <<<"}
          </a>
        </div>
        <Button onClick={onNextClick}>{"neeeext->"}</Button>
      </Card>
    </div>
  );
};

export default Playlist;
