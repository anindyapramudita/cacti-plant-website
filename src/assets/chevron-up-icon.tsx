import { FC, SVGAttributes } from "react";

interface IIconProps {
  color: string;
  width: number;
  height: number;
}

export const ChevronUpIcon: FC<SVGAttributes<IIconProps>> = ({
  color = "#000000",
  width = 30,
  height = 30,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Arrow / Chevron_Up">
        <path
          id="Vector"
          d="M5 16L12 9L19 16"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
