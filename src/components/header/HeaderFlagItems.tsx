import React from "react";
import { ReactComponent as FR } from "./../../assetsSrc/icons/france-rounded.svg";
import { ReactComponent as VN } from "./../../assetsSrc/icons/vietnam-rounded.svg";

export const HeaderFlagItems = [
  {
    language: "Français",
    index: 1,
    path: "/fr",
    flag: <FR className="flag__fr" />,
    className: "dropdown__link",
  },
  {
    language: "Tiếng Việt",
    index: 2,
    path: "/vn",
    flag: <VN className="flag__vn" />,
    className: "dropdown__link",
  },
];
