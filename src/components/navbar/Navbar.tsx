import React from "react";
// Routing
import { Link } from "react-router-dom";
// Components

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Table</Link>
        </li>
        <li>
          <Link to="/chartView">Chart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
