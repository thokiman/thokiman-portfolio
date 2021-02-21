import React from "react";
import { Link, withRouter } from "react-router-dom";

import { ReactComponent as CreamPrickInklaim } from "../../assets/collections-icon/prick-inklaim-icon/logo/prick_inklaim_logo_cream.svg";
import { ReactComponent as WhiteOutlineThokimanSkeleton } from "../../assets/collections-icon/thokiman-icon/logo/outline/thokiman_head_logo_cream.svg";
import "./footer.styles.scss";

const Footer = ({ socialIcon, ...props }) => {
  return (
    <div className="footer-container">
      <div className="profile-footer-container">
        <div className="profile-footer-icon">
          <CreamPrickInklaim className="footer-icon" />
          <WhiteOutlineThokimanSkeleton className="footer-icon" />
        </div>
        <div className="profile-footer-text">
          Copyright<sup>&#9400;</sup>2021.
          <em>Allright reserved </em>| Thomas Santosa, B. Eng.
        </div>
      </div>
      <br />
      <div className="social-footer-container">
        {socialIcon.map(({ iconPath, linkUrl }) => {
          return (
            <Link
              key={iconPath.id}
              to={{ pathname: linkUrl }}
              target="_blank"
              className="social-item"
              style={{
                backgroundImage: `url(${iconPath.iconPath})`,
              }}
            ></Link>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(Footer);
