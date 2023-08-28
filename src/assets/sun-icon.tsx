import { FC } from "react";

type ILogoProps = {
  className?: string;
};

export const SunIcon: FC<ILogoProps> = ({ className }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22.9036 15C22.9036 19.3652 19.365 22.9039 14.9998 22.9039C10.6346 22.9039 7.09595 19.3652 7.09595 15C7.09595 10.6349 10.6346 7.09619 14.9998 7.09619C19.365 7.09619 22.9036 10.6349 22.9036 15Z"
        stroke="black"
        strokeWidth="1.5"
      />
      <rect
        x="14.5962"
        width="0.865384"
        height="4.61539"
        rx="0.432692"
        fill="black"
      />
      <rect
        x="14.5962"
        y="25.3846"
        width="0.865384"
        height="4.61539"
        rx="0.432692"
        fill="black"
      />
      <rect
        x="25.3845"
        y="15.1731"
        width="0.865385"
        height="4.61538"
        rx="0.432693"
        transform="rotate(-90 25.3845 15.1731)"
        fill="black"
      />
      <rect
        width="0.865384"
        height="3.46154"
        rx="0.432692"
        transform="matrix(0.707106 0.707107 -0.707106 0.707107 23.7937 5.19232)"
        fill="black"
      />
      <rect
        width="0.865384"
        height="3.46154"
        rx="0.432692"
        transform="matrix(0.707106 0.707107 -0.707106 0.707107 7.64014 21.3462)"
        fill="black"
      />
      <rect
        width="0.865384"
        height="3.46154"
        rx="0.432692"
        transform="matrix(0.707106 -0.707107 0.707106 0.707107 5.19238 5.8042)"
        fill="black"
      />
      <rect
        width="0.865384"
        height="3.46154"
        rx="0.432692"
        transform="matrix(0.707106 -0.707107 0.707106 0.707107 21.3459 21.9581)"
        fill="black"
      />
      <rect
        y="15.1731"
        width="0.865385"
        height="4.61538"
        rx="0.432693"
        transform="rotate(-90 0 15.1731)"
        fill="black"
      />
    </svg>
  );
};
