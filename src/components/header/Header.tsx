import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Spin as Hamburger } from "hamburger-react";

import { ReactComponent as Logo } from "./../../assetsSrc/logo/logo-site_120-46px_v02_01.svg";
import { ReactComponent as AngleRight } from "./../../assetsSrc/icons/angle-right-solid.svg";
import { ReactComponent as AngleDown } from "./../../assetsSrc/icons/angle-down-solid.svg";
import { ReactComponent as DefaultUser } from "./../../assetsSrc/icons/user.svg";
import HeaderDropdownFlag from "./HeaderDropdownFlag";

import "./../../css/styles.css";

const Header = () => {
  const [hambClick, setHambClick] = useState(false);
  const [dropdownFlag, setDropdownFlag] = useState(false);
  const [currentUser, setcurrentUser] = useState("");

  const hambugerClick = () => setHambClick(!hambClick);
  const mobileMenuClose = () => setHambClick(false);
  const handleDropdownFlag = () => setDropdownFlag(!dropdownFlag);

  const showDropdownFlag = () => {
    if (window.innerWidth > 720) setDropdownFlag(true);
  };
  const hideDropdownFlag = () => {
    if (window.innerWidth > 720) setDropdownFlag(false);
  };

  return (
    <header className="header">
      <nav className="container">
        <div className="navbar__inner">
          <div className="navbar__logo">
            <Link to="/" onClick={mobileMenuClose}>
              <Logo className="logo" />
            </Link>
          </div>
          <div className="navbar__hamburgers">
            <Hamburger
              toggled={hambClick}
              toggle={hambugerClick}
              size={40}
              color="#464b4c"
            />
          </div>
          <ul className={`navbar__menu ${hambClick ? "active" : ""}`}>
            <div className="menu__separator"></div>
            <li className="menu__item about">
              <Link to="/about" onClick={mobileMenuClose}>
                à propos
              </Link>
            </li>
            <li className="menu__item forum">
              <Link to="/forum" onClick={mobileMenuClose}>
                forum
              </Link>
            </li>
            <li className="menu__item blog">
              <a
                href={`${process.env.REACT_APP_BLOG_ORIGIN}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={mobileMenuClose}
              >
                blog
              </a>
            </li>
            <li
              className="menu__item flag"
              onMouseEnter={showDropdownFlag}
              onMouseLeave={hideDropdownFlag}
            >
              <Link to="#" onClick={handleDropdownFlag}>
                flag <AngleDown className="icon-angle-down" />{" "}
                <AngleRight className="icon-angle-right" />
              </Link>
              <CSSTransition
                in={dropdownFlag}
                timeout={500}
                classNames={"dropdownFlag-"}
                unmountOnExit={true}
              >
                <HeaderDropdownFlag
                  dropdownFlag={dropdownFlag}
                  setDropdownFlag={setDropdownFlag}
                  setHambClick={setHambClick}
                />
              </CSSTransition>
            </li>
            {currentUser ? (
              <li className="menu__item login">
                <Link
                  className="current-user"
                  to="/user"
                  onClick={mobileMenuClose}
                >
                  <span className="default-user">
                    <DefaultUser />
                  </span>
                  <span className="user-name">{currentUser}</span>
                </Link>
              </li>
            ) : (
              <li className="menu__item login">
                <Link to="/login" onClick={mobileMenuClose}>
                  connexion
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
