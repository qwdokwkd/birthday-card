import { useCallback } from "react";

import { usePage } from "@/shared/providers";
import { Button, Card } from "@/shared/ui";

import HelloKittyGif from "@/shared/assets/images/hello-hitty.gif";

import "./LetterAccept.scss";

const LetterAccept: React.FC = () => {
  const { updatePage } = usePage();

  const onCancelClick = useCallback(() => {
    updatePage(5);
  }, [updatePage]);

  const onNextClick = useCallback(() => {
    updatePage(6);
  }, [updatePage]);

  return (
    <div className="letter-accept">
      <Card
        title="do you want to open it?(〃ω〃)"
        subtitle={
          <img className="letter-accept__card-image" src={HelloKittyGif} />
        }
      >
        <div className="letter-accept__card-content">
          <Button onClick={onNextClick}>open!! •̀ ω •́</Button>
          <Button onClick={onCancelClick} secondary>
            no i hate u ㅗ
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LetterAccept;
