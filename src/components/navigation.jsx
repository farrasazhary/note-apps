// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="flex gap-8">
        <li className="hover:text-orange-600">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-orange-600">
          <Link to="/notes/new">Add Note</Link>
        </li>
        <li className="hover:text-orange-600">
          <Link to="/notes/archive">Archive</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
