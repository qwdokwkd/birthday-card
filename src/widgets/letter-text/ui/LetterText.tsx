import { useCallback, useState } from "react";

import { Card } from "@/shared/ui";

import LetterJpg from "@/shared/assets/images/letter.jpg";
import LetterGif from "@/shared/assets/images/letter.gif";

import "./LetterText.scss";
import { buildClassName } from "@/shared/lib";

const LetterText: React.FC = () => {
  const [showLetter, setShowLetter] = useState(false);

  const onLetterClick = useCallback(() => {
    setShowLetter(true);
  }, [setShowLetter]);

  const onImageClick = useCallback(() => {
    setShowLetter(false);
  }, [setShowLetter]);

  return (
    <div className="letter-text">
      <Card title="happy birthday" subtitle="♡(ɔˆз(ˆ⌣ˆc)">
        <div className="letter-text__card-content">
          <img
            className="letter-text__card-image"
            onClick={onLetterClick}
            src={LetterGif}
          />
        </div>
      </Card>
      <div
        className={buildClassName("letter-text__letter", undefined, {
          hidden: !showLetter,
        })}
      >
        <img onClick={onImageClick} src={LetterJpg} />
      </div>
    </div>
  );
};

export default LetterText;
