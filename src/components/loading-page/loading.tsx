import { FC } from "react";
import { ILoadingProps } from "./loading.interface";
import { StylesWrapper } from "./loading.styles";
import { LOADING } from "@/shared/utils/constants";

export const Loading: FC<ILoadingProps> = () => {
  return (
    <StylesWrapper>
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
      <p className="loading-text">{LOADING}</p>
    </StylesWrapper>
  );
};
