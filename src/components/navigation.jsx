// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navigation() {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu(!menu)
  }

  const handleMenuItemClick = () => {
    setMenu(false)
  }

  return (
    <nav className="navigation">
      <Link to="/"><h1 className="text-3xl font-bold text-orange-600 flex ali">Notes App</h1></Link>
      <ul className={menu ? "mobile" : "flex gap-8 desktop"}>
        <li className="hover:text-orange-600" onClick={handleMenuItemClick}>
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-orange-600" onClick={handleMenuItemClick}>
          <Link to="/notes/new">Add Note</Link>
        </li>
        <li className="hover:text-orange-600" onClick={handleMenuItemClick}>
          <Link to="/notes/archive">Archive</Link>
        </li>
      </ul>

      <div onClick={() => {
        setMenu(!menu)
        console.log(menu, '< menu')
      }} className="bar">
        {
          menu ? <FaTimes /> : <FaBars />
        }
      </div>
    </nav>
  );
}

export default Navigation;
