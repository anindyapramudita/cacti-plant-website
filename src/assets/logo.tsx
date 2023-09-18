import { FC } from "react";

type ILogoProps = {
  className: string;
};

export const Logo: FC<ILogoProps> = ({ className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="19" stroke="#272716" strokeWidth="2" />
      <path
        d="M18.8236 39.2157C18.8236 29.8039 24.3138 23.1373 34.9021 22.353C30.9804 40.3922 3.13738 38.4314 6.27461 14.902C16.0785 17.2549 16.4707 27.8432 16.4707 29.4118C22.7451 23.9216 21.1766 10.9804 14.1177 6.27454C10.5883 18.4314 26.6667 27.0589 33.3334 13.3334C29.9796 13.0463 28.2211 13.2614 25.4903 14.902C26.7788 11.3902 26.8815 9.48991 25.4903 6.27454C22.8445 7.35236 21.1766 10.1961 21.1766 10.1961"
        stroke="#272716"
        strokeWidth="2"
      />
    </svg>
  );
};
