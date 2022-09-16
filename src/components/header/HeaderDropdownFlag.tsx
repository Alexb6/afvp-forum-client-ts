import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AngleRight } from "./../../assetsSrc/icons/angle-right-solid.svg";
import { HeaderFlagItems } from "./HeaderFlagItems";

import "./../../css/styles.css";

type Props = {
  dropdownFlag: boolean;
  setDropdownFlag: Dispatch<SetStateAction<boolean>>;
  setHambClick: Dispatch<SetStateAction<boolean>>;
};

const HeaderDropdownFlag = ({
  dropdownFlag,
  setDropdownFlag,
  setHambClick,
}: Props) => {
  const langSelect = () => {
    setDropdownFlag(false);
    setHambClick(false);
  };

  return (
    <ul className="dropdown__menu">
      <div className={`dropdown__flag ${dropdownFlag ? "active" : ""}`}>
        <div
          className="mobile-close-dropdown"
          onClick={() => setDropdownFlag(!dropdownFlag)}
        >
          {/* <AngleRight className="icon-angle-right" /> */}
        </div>
        {HeaderFlagItems.map((item) => {
          return (
            <li key={item.index}>
              <Link
                className={item.className}
                to={item.path}
                onClick={langSelect}
              >
                <div className="flag-flag">{item.flag}</div> {item.language}
              </Link>
            </li>
          );
        })}
      </div>
    </ul>
  );
};

export default HeaderDropdownFlag;
