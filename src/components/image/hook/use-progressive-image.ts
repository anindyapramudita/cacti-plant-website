import { useEffect, useState } from "react";

interface IProgressiveImageProps {
  lowQualityImage: string;
  highQualityImage: string;
}

export const useProgressiveImage = ({
  lowQualityImage,
  highQualityImage,
}: IProgressiveImageProps) => {
  const [src, setSrc] = useState(lowQualityImage);

  useEffect(() => {
    setSrc(lowQualityImage);

    const img = new Image();
    img.src = highQualityImage;

    img.onload = () => {
      setSrc(highQualityImage);
    };
  }, [lowQualityImage, highQualityImage]);

  return [{ src, blur: src !== highQualityImage }];
};
