import { FC } from "react";

type ILogoProps = {
  className?: string;
};

export const InfoIcon: FC<ILogoProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="30"
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22 29.25H2C1.30964 29.25 0.75 28.6904 0.75 28V2C0.75 1.30964 1.30964 0.75 2 0.75H15.4393L23.25 8.56066V28C23.25 28.6904 22.6904 29.25 22 29.25Z"
        stroke="black"
        strokeWidth="1.5"
      />
      <rect
        x="3"
        y="22.5"
        width="13.5"
        height="1.125"
        rx="0.5625"
        fill="black"
      />
      <rect x="18" y="22.5" width="3" height="1.125" rx="0.5625" fill="black" />
      <rect
        x="3"
        y="16.5"
        width="13.5"
        height="1.125"
        rx="0.5625"
        fill="black"
      />
      <rect x="18" y="16.5" width="3" height="1.125" rx="0.5625" fill="black" />
      <rect
        x="3"
        y="10.5"
        width="13.5"
        height="1.125"
        rx="0.5625"
        fill="black"
      />
      <rect x="18" y="10.5" width="3" height="1.125" rx="0.5625" fill="black" />
      <rect x="3" y="25.5" width="12" height="1.125" rx="0.5625" fill="black" />
      <rect
        x="16.5"
        y="25.5"
        width="4.5"
        height="1.125"
        rx="0.5625"
        fill="black"
      />
      <rect x="3" y="19.5" width="12" height="1.125" rx="0.5625" fill="black" />
      <rect
        x="16.5"
        y="19.5"
        width="4.5"
        height="1.125"
        rx="0.5625"
        fill="black"
      />
      <rect x="3" y="13.5" width="12" height="1.125" rx="0.5625" fill="black" />
      <rect
        x="16.5"
        y="13.5"
        width="4.5"
        height="1.125"
        rx="0.5625"
        fill="black"
      />
    </svg>
  );
};
