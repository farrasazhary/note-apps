// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { LocaleConsumer } from "../contexts/LocaleContext";
import ThemeButton from "./themeButton";

function Navigation({ logout }) {
  const [menu, setMenu] = useState(false);

  // const handleMenuClick = () => {
  //   setMenu(!menu)
  // }

  const handleMenuItemClick = () => {
    setMenu(false);
  };

  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
        return (
          <nav className="navigation ">
            <Link to="/">
              <h1 className="text-3xl font-bold text-orange-600 flex ali">
                Notes App
              </h1>
            </Link>
            <ul className={menu ? "mobile active" : "flex gap-8 desktop"}>
              <li>
                <ThemeButton className="menus" />
              </li>
              <li>
                <button onClick={toggleLocale} className="menus">
                  {locale === "id" ? "English" : "Indonesia"}
                </button>
              </li>
              <li
                className="hover:text-orange-600"
                onClick={handleMenuItemClick}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className="hover:text-orange-600 menus"
                onClick={handleMenuItemClick}
              >
                <Link to="/notes/new">Add Note</Link>
              </li>
              <li
                className="hover:text-orange-600 menus"
                onClick={handleMenuItemClick}
              >
                <Link to="/notes/archive">Archive</Link>
              </li>
              <li>
                <button onClick={logout} className="menus">
                  Logout
                </button>
              </li>
            </ul>

            <div
              onClick={() => {
                setMenu(!menu);
              }}
              className={`bar ${menu ? "active" : ""}`}
            >
              {menu ? <FaTimes /> : <FaBars />}
            </div>
          </nav>
        );
      }}
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
