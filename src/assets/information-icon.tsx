import { FC, SVGAttributes } from "react";

interface IIconProps {
  color: string;
  width: number;
  height: number;
}

export const InformationIcon: FC<SVGAttributes<IIconProps>> = ({
  color = "#000000",
  width = 20,
  // height = 20,
}) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 15 15"
      version="1.1"
      id="information"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          id="rect8399"
          d="M7.5,1&#10;&#9;C6.7,1,6,1.7,6,2.5S6.7,4,7.5,4S9,3.3,9,2.5S8.3,1,7.5,1z M4,5v1c0,0,2,0,2,2v2c0,2-2,2-2,2v1h7v-1c0,0-2,0-2-2V6c0-0.5-0.5-1-1-1H4&#10;&#9;z"
        />{" "}
      </g>
    </svg>
    // <svg
    //   width={width}
    //   height={width}
    //   viewBox="0 0 76 76"
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    //   version="1.1"
    //   baseProfile="full"
    //   enable-background="new 0 0 76.00 76.00"
    //   xmlSpace="preserve"
    // >
    //   <path
    //     fill={color}
    //     fill-opacity="1"
    //     stroke-width="0.2"
    //     stroke-linejoin="round"
    //     d="M 31.6666,30.0834L 42.7499,30.0834L 42.7499,33.2501L 42.7499,52.2501L 45.9165,52.2501L 45.9165,57.0001L 31.6666,57.0001L 31.6666,52.2501L 34.8332,52.2501L 34.8332,34.8335L 31.6666,34.8335L 31.6666,30.0834 Z M 38.7917,19C 40.9778,19 42.75,20.7722 42.75,22.9583C 42.75,25.1445 40.9778,26.9167 38.7917,26.9167C 36.6055,26.9167 34.8333,25.1445 34.8333,22.9583C 34.8333,20.7722 36.6055,19 38.7917,19 Z "
    //   />
    // </svg>
  );
};
