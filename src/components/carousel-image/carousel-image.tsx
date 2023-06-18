import { TransitionImage } from "@/components/image";
import { FC, useEffect, useState } from "react";
import { ICarouselImage } from "./carousel-image.interface";
import { LineCounter, StylesWrapper } from "./carousel-image.styles";

export const CarouselImage: FC<ICarouselImage> = ({
  images,
  restartImage,
  setRestartImage,
}) => {
  const [currentId, setCurrentId] = useState<number>(0);
  const imageLength = images.length;

  const changeId = () => {
    if (currentId === imageLength - 1) {
      return setCurrentId(0);
    }
    return setCurrentId(currentId + 1);
  };

  useEffect(() => {
    const interval = setInterval(changeId, 5000);
    if (!restartImage) {
      return () => clearInterval(interval);
    } else {
      clearInterval(interval);
      setCurrentId(0);
      setRestartImage(false);
    }
  });

  const handleLineClick = (index: number) => {
    setCurrentId(index);
  };

  return (
    <StylesWrapper>
      <div className="line-container">
        {images.length > 1
          ? Array.from({ length: images.length }).map((_, index) => (
              <LineCounter
                key={index}
                index={index}
                activeIndex={currentId}
                totalLine={imageLength}
                restartImage={restartImage}
                onClick={() => handleLineClick(index)}
              />
            ))
          : null}
      </div>
      <TransitionImage
        image={images[currentId].mainImage}
        placeholder={images[currentId].placeholder}
        alt={images[currentId].alt}
      />
    </StylesWrapper>
  );
};
