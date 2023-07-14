import { FC, useMemo } from "react";
import { ILoaderProps } from "./loader.interface";
import { StylesWrapper, StylesCircle } from "./loader.styles";

export const Loader: FC<ILoaderProps> = ({ size = "small", number = 3 }) => {
  const renderCircle = useMemo(() => {
    const array = new Array(number).fill("");
    return array.map((_, index) => {
      return (
        <StylesCircle
          number={index}
          size={size}
          key={index}
          data-testid="loader-dot"
        />
      );
    });
  }, [number, size]);

  return (
    <StylesWrapper data-testid="loader" size={size}>
      {renderCircle}
    </StylesWrapper>
  );
};
