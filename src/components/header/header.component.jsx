import React from "react";
import { Link, withRouter } from "react-router-dom";

import { ReactComponent as BluePrickInklaimIcon } from "../../assets/collections-icon/prick-inklaim-icon/logo/prick_inklaim_logo_blue.svg";
import "./header.styles.scss";

class Header extends React.Component {
  render() {
    const {
      location: { pathname },
    } = this.props;
    return (
      <div className="header-container">
        <div className="header-pi-container">
          <Link to="/" className="header-pi-logo">
            <BluePrickInklaimIcon className="blue-pi-svg" />
          </Link>
        </div>
        <div className="header-text-container">
          <div className="header-link-container">
            <Link
              to="/"
              className={
                pathname.match(RegExp(/^\/$/))
                  ? "header-link-active"
                  : "header-link"
              }
            >
              Home
            </Link>
          </div>
          <div className="header-link-container">
            <Link
              to="/about"
              className={
                pathname.match(RegExp(/\/about+/))
                  ? "header-link-active"
                  : "header-link"
              }
            >
              About
            </Link>
          </div>
          <div className="header-link-container">
            <Link
              to="/portfolio"
              className={
                pathname.match(RegExp(/\/portfolio+/))
                  ? "header-link-active"
                  : "header-link"
              }
            >
              Portfolio
            </Link>
          </div>
          <div className="header-link-container">
            <Link
              to="/service"
              className={
                pathname.match(RegExp(/\/service+/))
                  ? "header-link-active"
                  : "header-link"
              }
            >
              Service
            </Link>
          </div>
          <div className="header-link-container">
            <Link
              to="/contact"
              className={
                pathname.match(RegExp(/\/contact+/))
                  ? "header-link-active"
                  : "header-link"
              }
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
