import { FC, useMemo, useState } from "react";
import Link from "next/link";
import { IconButton } from "../icon-button";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import { imagePlaceholder } from "@/shared/utils/image-placeholder";
import classNames from "classnames";
import { ISliderImageProps } from "./slider-image.interface";
import { StylesWrapper } from "./slider-image.styles";

export const SliderImage: FC<ISliderImageProps> = ({ images, id }) => {
  const [prevDisabled, setPrevDisabled] = useState<boolean>(true);
  const [nextDisabled, setNextDisabled] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(0);
  const [currentImages, setCurrentImages] = useState<number[]>([0, 1]);

  const renderImage = useMemo(() => {
    return images.map((image, index) => {
      if (currentImages.includes(index)) {
        return (
          <div className="image-container" key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              sizes="(max-width: 768px) 100vw, (max-width: 992px) 33vw, 20vw"
              fill={true}
              blurDataURL={imagePlaceholder}
              placeholder="blur"
              style={{ objectFit: "cover" }}
              className="plant-image"
              priority={true}
            />
          </div>
        );
      }
    });
  }, [currentImages, images]);

  const handleNextImage = () => {
    setCurrentId(currentId + 1);
    setPrevDisabled(false);

    if (!currentImages.includes(currentId + 1)) {
      const temp = [...currentImages];
      temp.push(currentId + 1);
      setCurrentImages(temp);
    }

    if (currentId + 1 === images.length - 1) {
      setNextDisabled(true);
    }
  };

  const handlePrevImage = () => {
    setNextDisabled(false);
    setCurrentId(currentId - 1);
    if (currentId - 1 === 0) {
      setPrevDisabled(true);
    }
  };

  return (
    <StylesWrapper currentId={currentId}>
      <div className="slider-component">
        <Link className="slider-image-wrapper" href={`/plant/${id}`}>
          {renderImage}
        </Link>
        <IconButton
          className="button-left"
          icon={<BiChevronLeft size={25} />}
          onClick={handlePrevImage}
          disabled={prevDisabled}
        />
        <IconButton
          className="button-right"
          icon={<BiChevronRight size={25} />}
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
      </div>
    </StylesWrapper>
  );
};
