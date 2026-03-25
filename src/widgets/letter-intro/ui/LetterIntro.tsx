import { usePage } from "@/shared/providers";
import { Button, Card } from "@/shared/ui";
import { useCallback } from "react";

import EnvelopeSvg from "@/shared/assets/icons/envelope.svg?react";

const LetterIntro: React.FC = () => {
  const { updatePage } = usePage();

  const onNextClick = useCallback(() => {
    updatePage(4);
  }, [updatePage]);

  return (
    <div className="letter-intro">
      <Card
        icon={<EnvelopeSvg width={48} height={48} />}
        title="i wrote a letter for you!!! ♡ (⇀ 3 ↼)"
      >
        <Button onClick={onNextClick}>next</Button>
      </Card>
    </div>
  );
};

export default LetterIntro;
