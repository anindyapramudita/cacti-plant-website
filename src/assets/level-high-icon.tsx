import { FC, SVGAttributes } from "react";

interface IIconProps {
  color: string;
  width: number;
  height: number;
}

export const LevelHighIcon: FC<SVGAttributes<IIconProps>> = ({
  color = "#ffffff",
  width = 30,
  height = 30,
}) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={color}
      stroke={color}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>signal-strength-8</title>{" "}
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          {" "}
          <g
            id="drop"
            fill={"#000000"}
            transform="translate(42.666667, 85.333333)"
            className="g-stroke"
          >
            {" "}
            <polygon
              id="Path"
              points="426.666667 1.42108547e-14 426.666667 341.333333 3.55271368e-14 341.333333"
            >
              {" "}
            </polygon>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
