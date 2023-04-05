import { FC, SVGAttributes } from "react";

interface IIconProps {
  color: string;
  width: number;
  height: number;
}

export const CircleIcon: FC<SVGAttributes<IIconProps>> = ({
  color = "#000000",
  width = 20,
  // height = 20,
}) => {
  return (
    <svg
      fill={color}
      width={width}
      height={width}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <circle cx="16" cy="16" r="16" />{" "}
      </g>
    </svg>
  );
};
