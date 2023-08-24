import { FC } from "react";

type ILogoProps = {
  className?: string;
};

export const WaterIcon: FC<ILogoProps> = ({ className }) => {
  return (
    <svg
      width="40"
      height="42"
      viewBox="0 0 40 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M31.4229 11.2158C29.1523 11.2158 27.1193 12.4824 26.1174 14.5213C25.9508 14.8603 26.0905 15.2702 26.4295 15.4367C26.7686 15.6034 27.1784 15.4636 27.3449 15.1246C28.1152 13.5572 29.6777 12.5835 31.4229 12.5835C33.9267 12.5835 35.9637 14.6205 35.9637 17.1243C35.9637 19.4608 34.1897 21.3901 31.918 21.6376V17.2264C31.918 16.8487 31.6119 16.5425 31.2341 16.5425H16.2089L9.99765 10.7004C10.6145 9.17305 10.271 7.38856 9.08264 6.20031C8.81556 5.93323 8.38253 5.93323 8.11539 6.20031L3.20031 11.1153C2.93323 11.3824 2.93323 11.8154 3.20031 12.0826C4.37468 13.2569 6.14409 13.6068 7.66231 13.0124L15.2539 21.0573V35.3161C15.2539 35.6938 15.5601 36 15.9378 36H31.2341C31.6118 36 31.918 35.6938 31.918 35.3161V23.0119C34.9452 22.7596 37.3314 20.2156 37.3314 17.1243C37.3314 13.8663 34.6809 11.2158 31.4229 11.2158ZM30.5501 19.815H22.8888C22.5111 19.815 22.2049 20.1211 22.2049 20.4988C22.2049 20.8766 22.5111 21.1827 22.8888 21.1827H30.5501V34.6322H16.6217V20.7854C16.6217 20.6109 16.5549 20.443 16.4352 20.3161L8.31836 11.7146C8.10419 11.4877 7.76336 11.4344 7.49025 11.5854C6.61339 12.07 5.54939 12.0348 4.71203 11.538L8.53863 7.71142C9.04247 8.55851 9.07184 9.63405 8.56995 10.5181C8.41425 10.7925 8.46628 11.1377 8.69614 11.3539L15.4693 17.7245C15.5961 17.8439 15.7637 17.9103 15.9378 17.9103H30.5501V19.815Z"
        fill="black"
      />
      <path
        d="M20.1658 19.7867H18.8042C18.4265 19.7867 18.1204 20.1002 18.1204 20.4869C18.1204 20.8736 18.4265 21.1871 18.8042 21.1871H20.1658C20.5435 21.1871 20.8497 20.8736 20.8497 20.4869C20.8497 20.1002 20.5435 19.7867 20.1658 19.7867Z"
        fill="black"
      />
    </svg>
  );
};