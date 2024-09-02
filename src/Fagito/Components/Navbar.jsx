import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="nav-section">
      <Link to='/' className="link">
        <div className="appname">
          <h2 className="Appname">Fagito</h2>
        </div>
      </Link>
      <div className="searchbar">
        <input type="text" placeholder="Search...." />
      </div>
      <div className="User">Login/Signup</div>
    </section>
  );
};

export default Navbar;
