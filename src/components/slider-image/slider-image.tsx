import { FC, useMemo, useState } from "react";
import { ISliderImageProps } from "./slider-image.interface";
import { ImageCard } from "../image-card";
import classNames from "classnames";
import { StylesWrapper } from "./slider-image.styles";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IconButton } from "../icon-button";
import Link from "next/link";

export const SliderImage: FC<ISliderImageProps> = ({
  images,
  width,
  height,
  imageLink,
}) => {
  const [currentId, setCurrentId] = useState<number>(0);
  const [imageArray, setImageArray] = useState<number[]>([0, 1]);
  const [prevDisabled, setPrevDisabled] = useState<boolean>(true);
  const [nextDisabled, setNextDisabled] = useState<boolean>(false);

  const handleNextImage = () => {
    if (currentId + 1 === images.length - 1) {
      setNextDisabled(true);
    }

    if (!imageArray.includes(currentId + 2)) {
      const temp = [...imageArray];
      temp.push(currentId + 2);
      setImageArray(temp);
    }

    setCurrentId(currentId + 1);
    setPrevDisabled(false);
  };

  const handlePrevImage = () => {
    if (currentId - 1 === 0) {
      setPrevDisabled(true);
    }
    setCurrentId(currentId - 1);
    setNextDisabled(false);
  };

  const renderImage = useMemo(() => {
    return images.map((image, index) => {
      if (index <= currentId + 1 || imageArray.includes(index))
        return (
          <Link href={imageLink || "#"}>
            <ImageCard
              className="plant-image"
              key={index}
              src={image.src}
              alt={image.alt}
              width={width}
              height={height}
            />
          </Link>
        );
    });
  }, [images, currentId, width, height, imageArray, imageLink]);

  return (
    <StylesWrapper width={width} height={height} currentId={currentId}>
      <div className="image-wrapper">{renderImage}</div>
      <IconButton
        className="button-left"
        icon={<BiChevronLeft size={35} />}
        onClick={handlePrevImage}
        disabled={prevDisabled}
      />
      <IconButton
        className="button-right"
        icon={<BiChevronRight size={35} />}
        onClick={handleNextImage}
        disabled={nextDisabled}
      />
      <div className="dot-counter">
        {Array.from({ length: images.length }).map((_, index) => (
          <div
            key={index}
            className={classNames("dot", { active: currentId === index })}
          />
        ))}
      </div>
    </StylesWrapper>
  );
};
