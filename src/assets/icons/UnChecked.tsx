import { FC } from "react";
import { Iconprops } from "./icons-props.types";

const UnChecked: FC<Iconprops> = (props) => {
  return (
    <svg
      width={props.width || "14"}
      height={props.height || "14"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.45825 7.00004C1.45825 4.38768 1.45825 3.08149 2.26981 2.26993C3.08137 1.45837 4.38755 1.45837 6.99992 1.45837C9.61226 1.45837 10.9185 1.45837 11.7301 2.26993C12.5416 3.08149 12.5416 4.38768 12.5416 7.00004C12.5416 9.61238 12.5416 10.9186 11.7301 11.7302C10.9185 12.5417 9.61226 12.5417 6.99992 12.5417C4.38755 12.5417 3.08137 12.5417 2.26981 11.7302C1.45825 10.9186 1.45825 9.61238 1.45825 7.00004Z"
        stroke="#0F2730"
      />
    </svg>
  );
};

export default UnChecked;
