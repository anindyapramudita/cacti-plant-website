import { FC, SVGAttributes } from "react";

interface IIconProps {
  color: string;
  width: number;
  height: number;
}

export const BurgerIcon: FC<SVGAttributes<IIconProps>> = ({
  color = "#000000",
  width = 30,
  height = 30,
}) => {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18L20 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
