import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as BluePrickInklaimIcon } from "../../assets/collections-icon/prick-inklaim-icon/logo/prick_inklaim_logo_blue.svg";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-pi-container">
        <Link to="/" className="header-pi-logo">
          <BluePrickInklaimIcon />
        </Link>
      </div>
      <div className="header-text-container">
        <div className="header-link-container">
          <Link to="/" className="header-link">
            Home
          </Link>
        </div>
        <div className="header-link-container">
          <Link to="/about" className="header-link">
            About
          </Link>
        </div>
        <div className="header-link-container">
          <Link to="/portfolio" className="header-link">
            Portfolio
          </Link>
        </div>
        <div className="header-link-container">
          <Link to="/service" className="header-link">
            Service
          </Link>
        </div>
        <div className="header-link-container">
          <Link to="/contact" className="header-link">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
