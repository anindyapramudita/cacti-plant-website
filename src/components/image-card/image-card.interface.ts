import { HTMLAttributes } from "react";

export interface IImageCardProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  carousel?: boolean;
  className?: string;
  onLoadingComplete?: () => void;
}
