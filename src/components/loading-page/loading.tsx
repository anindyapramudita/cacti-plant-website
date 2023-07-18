import { FC } from "react";
import { ILoadingProps } from "./loading.interface";
import { StylesWrapper } from "./loading.styles";

export const Loading: FC<ILoadingProps> = () => {
  return (
    <StylesWrapper>
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
      <p>Loading...</p>
    </StylesWrapper>
  );
};
