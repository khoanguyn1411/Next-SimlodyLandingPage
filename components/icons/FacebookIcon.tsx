import { IconProps } from "./type";

export const FacebookIcon: React.FC<IconProps> = ({ size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2160_15105)">
        <path
          d="M27.5625 14C27.5625 6.50781 21.4922 0.4375 14 0.4375C6.50781 0.4375 0.4375 6.50781 0.4375 14C0.4375 20.7692 5.39711 26.3802 11.8809 27.3984V17.9205H8.43555V14H11.8809V11.0119C11.8809 7.61305 13.9043 5.73562 17.0034 5.73562C18.4877 5.73562 20.0397 6.00031 20.0397 6.00031V9.33625H18.3291C16.6447 9.33625 16.1191 10.3819 16.1191 11.4543V14H19.8805L19.279 17.9205H16.1191V27.3984C22.6029 26.3802 27.5625 20.7692 27.5625 14Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2160_15105">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
