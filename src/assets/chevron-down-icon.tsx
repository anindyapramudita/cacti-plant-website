import { FC, SVGAttributes } from "react";

interface IIconProps {
  color: string;
  width: number;
  height: number;
}

export const ChevronDownIcon: FC<SVGAttributes<IIconProps>> = ({
  color = "#000000",
  width = 30,
  height = 30,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 7l6 6 6-6"
      />
    </svg>
  );
};
