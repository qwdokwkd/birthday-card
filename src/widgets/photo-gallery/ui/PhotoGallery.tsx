import { Button, Card } from "@/shared/ui";

import "./PhotoGallery.scss";
import { usePage } from "@/shared/providers";
import { useCallback } from "react";

const PhotoGallery = () => {
  const { updatePage } = usePage();

  const onNextClick = useCallback(() => {
    updatePage(2);
  }, [updatePage]);

  return (
    <div className="photo-gallery">
      <div className="photo-gallery__photos">
        <img className="photo-gallery__photo" src="./photo-gallery/irl.jpg" />
        <img
          className="photo-gallery__photo"
          src="./photo-gallery/irl-photobooth-1.png"
        />
        <img
          className="photo-gallery__photo"
          src="./photo-gallery/irl-photobooth-2.png"
        />
        <img
          className="photo-gallery__photo"
          src="./photo-gallery/minecraft.jpg"
        />
      </div>
      <Card className="photo-gallery__card" title="🤍our memories🤍">
        <div className="photo-gallery__card-content">
          <div className="photo-gallery__card-text">
            there aren't many photos, but thank you for every single one (ಥ﹏ಥ)
          </div>
        </div>
        <Button onClick={onNextClick}>next!!^o^</Button>
      </Card>
    </div>
  );
};

export default PhotoGallery;
