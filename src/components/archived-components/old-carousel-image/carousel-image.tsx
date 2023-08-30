import { TransitionImage } from "@/components/image";
import { FC, useEffect, useState } from "react";
import { ICarouselImage } from "./carousel-image.interface";
import { LineCounter, StylesWrapper } from "./carousel-image.styles";
import { imagePlaceholder } from "@/shared/utils/image-placeholder";

export const CarouselImage: FC<ICarouselImage> = ({
  images,
  restartImage,
  setRestartImage,
}) => {
  const [currentId, setCurrentId] = useState<number>(0);
  const imageLength = images?.length;
  const [newId, setNewId] = useState<number>(-1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentId((prevCount) => (prevCount + 1) % images.length);
    }, 4950);

    if (!restartImage) {
      return () => clearInterval(timer);
    } else {
      clearInterval(timer);
      setRestartImage(false);
      if (newId < 0) {
        setCurrentId(0);
      } else {
        setCurrentId(newId);
        setNewId(-1);
      }
    }
  }, [images, restartImage, setRestartImage, newId]);

  return (
    <StylesWrapper>
      <div className="line-container">
        {images?.length > 1
          ? Array.from({ length: images.length }).map((_, index) => (
              <LineCounter
                key={index}
                index={index}
                activeIndex={currentId}
                totalLine={imageLength}
                restartImage={restartImage}
                onClick={() => {
                  setNewId(index);
                  setRestartImage(true);
                }}
                currentImage={images[currentId].src}
              />
            ))
          : null}
      </div>
      <TransitionImage
        image={images[currentId].src}
        placeholder={imagePlaceholder}
        alt={images[currentId].alt}
      />
    </StylesWrapper>
  );
};
