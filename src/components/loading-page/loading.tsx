import { FC } from "react";
import { StylesWrapper } from "./loading.styles";
import { LOADING } from "@/shared/utils/constants";

export const Loading: FC = () => {
  return (
    <StylesWrapper>
      <div className="spinner-container">
        <div className="loading-spinner" />
      </div>
      <p className="loading-text">{LOADING}</p>
    </StylesWrapper>
  );
};
