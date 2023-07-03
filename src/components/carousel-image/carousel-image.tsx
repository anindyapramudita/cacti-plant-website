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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentId((prevCount) => (prevCount + 1) % images.length);
    }, 4950);

    if (!restartImage) {
      return () => clearInterval(timer);
    } else {
      clearInterval(timer);
      setCurrentId(0);
      setRestartImage(false);
    }
  }, [images, restartImage, setRestartImage]);

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
                currentImage={images[currentId].mainImage}
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
