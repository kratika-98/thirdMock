import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Board</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/onboard-doctor">Onboard Doctor</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;