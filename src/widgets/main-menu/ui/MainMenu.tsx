import { usePage } from "@/shared/providers";
import { Button, Card } from "@/shared/ui";

import { useCallback } from "react";

import "./MainMenu.scss";

const MainMenu = () => {
  const { updatePage } = usePage();

  const onNextClick = useCallback(() => {
    updatePage(1);
  }, [updatePage]);

  return (
    <div className="main-menu">
      <Card
        className="main-menu__card"
        title={"생일 축하해!<3"}
        subtitle={
          <div className="main-menu__card-subtitle">
            <img
              className="main-menu__card-image"
              src="./introduction/heading-3.jpg"
              alt="intro-img.jpg"
            />
            <span>（╹◡╹）♡</span>
          </div>
        }
      >
        <div className="main-menu__card-content">
          click the next button (´-ω-`)
        </div>
        <Button onClick={onNextClick}>next!!^o^</Button>
      </Card>
    </div>
  );
};

export default MainMenu;
