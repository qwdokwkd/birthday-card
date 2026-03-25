import { useCallback } from "react";

import { usePage } from "@/shared/providers";
import { Button, Card } from "@/shared/ui";

import BearGif from "@/shared/assets/images/bear.gif";

import "./LetterWrongChoice.scss";

const LetterWrongChoice: React.FC = () => {
  const { updatePage } = usePage();

  const onNextClick = useCallback(() => {
    updatePage(4);
  }, [updatePage]);

  return (
    <div className="letter-wrong-choice">
      <Card
        title="WHY YOU DONT WANT TO READ IT "
        subtitle={
          <img className="letter-wrong-choice__card-image" src={BearGif} />
        }
      >
        <Button onClick={onNextClick}>IM SO SORRY</Button>
      </Card>
    </div>
  );
};

export default LetterWrongChoice;
