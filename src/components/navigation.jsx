// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/notes/new">Add Note</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
