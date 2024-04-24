import { FC } from "react";
import { Iconprops } from "./icons-props.types";

const Checked: FC<Iconprops> = (props) => {
  return (
    <svg
      width={props.width || "14"}
      height={props.height || "14"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_233)">
        <path
          d="M1.45825 7.00004C1.45825 4.38768 1.45825 3.08149 2.26981 2.26993C3.08137 1.45837 4.38755 1.45837 6.99992 1.45837C9.61226 1.45837 10.9185 1.45837 11.7301 2.26993C12.5416 3.08149 12.5416 4.38768 12.5416 7.00004C12.5416 9.61238 12.5416 10.9186 11.7301 11.7302C10.9185 12.5417 9.61226 12.5417 6.99992 12.5417C4.38755 12.5417 3.08137 12.5417 2.26981 11.7302C1.45825 10.9186 1.45825 9.61238 1.45825 7.00004Z"
          stroke="#0F2730"
        />
        <path
          d="M4.66675 8.02083C4.66675 8.02083 5.60008 8.55313 6.06675 9.33333C6.06675 9.33333 7.46675 6.27083 9.33341 5.25"
          stroke="#0F2730"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_233">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Checked;
