import { FC, useEffect, useMemo, useState } from "react";
import { ICarouselImage, PlantImages } from "./carousel-image.interface";
import { LineCounter, StylesWrapper } from "./carousel-image.styles";
import { ImageCard } from "@/components/image-card";
import classNames from "classnames";

export const CarouselImage: FC<ICarouselImage> = ({
  images,
  width,
  height,
}) => {
  const defaultState: PlantImages = useMemo(() => {
    return {
      currentId: 0,
      currentImage: {
        src: images[0]?.src,
        alt: images[0]?.alt,
      },
    };
  }, [images]);

  const [currentState, setCurrentState] = useState<PlantImages>(defaultState);
  const [restartImage, setRestartImage] = useState<boolean>(false);
  const [loadComplete, setLoadComplete] = useState<boolean>(false);

  const handleLoadComplete = () => setLoadComplete(true);
  useEffect(() => {
    if (loadComplete) {
      const timer = setInterval(() => {
        if (currentState.currentId >= images.length - 1) {
          setCurrentState(defaultState);
        } else {
          const prevId = currentState.currentId;
          setCurrentState({
            currentId: prevId + 1,
            currentImage: {
              src: images[prevId + 1]?.src,
              alt: images[prevId + 1]?.alt,
            },
          });
        }
      }, 4980);

      if (!restartImage) {
        return () => clearInterval(timer);
      } else {
        clearInterval(timer);
        setRestartImage(false);
      }
    }
  }, [
    currentState.currentId,
    images,
    defaultState,
    restartImage,
    loadComplete,
  ]);

  return (
    <StylesWrapper>
      <ImageCard
        src={currentState.currentImage.src}
        alt={currentState.currentImage.alt}
        width={width}
        height={height}
        className="carousel-image"
        carousel
        onLoadingComplete={handleLoadComplete}
      />
      <div className="line-container">
        {images?.length > 1
          ? Array.from({ length: images.length }).map((_, index) => (
              <LineCounter
                key={index}
                totalLine={images.length}
                restartImage={restartImage}
                className={classNames(
                  {
                    "active-index": index === currentState.currentId,
                  },
                  { "next-index": index >= currentState.currentId },
                  {
                    "image-loaded": loadComplete,
                  }
                )}
              />
            ))
          : null}
      </div>
    </StylesWrapper>
  );
};
