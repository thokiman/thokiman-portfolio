import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as WhiteOutlineThokiman } from "../../assets/collections-icon/thokiman-icon/logo/outline/thokiman_head_logo_cream.svg";
import "./contact-info.styles.scss";

const ContactInfo = ({ title, items: { socialIcon, photoIcon } }) => {
  return (
    <div className="contact-information-container">
      <div className="contact-information-title">{title}</div>
      <div className="contact-information-content">
        <WhiteOutlineThokiman className="white-thokiman-contact-icon-0" />
        <WhiteOutlineThokiman className="white-thokiman-contact-icon-1" />
        <WhiteOutlineThokiman className="white-thokiman-contact-icon-2" />
        <WhiteOutlineThokiman className="white-thokiman-contact-icon-3" />
        <WhiteOutlineThokiman className="white-thokiman-contact-icon-4" />
        <WhiteOutlineThokiman className="white-thokiman-contact-icon-5" />
        <WhiteOutlineThokiman className="white-thokiman-contact-icon-6" />
        <WhiteOutlineThokiman className="white-thokiman-contact-icon-7" />
        <Link
          to={{ pathname: socialIcon[0].linkUrl }}
          target="_blank"
          className={`social-contact-link-icon-${socialIcon[0].iconPath.field}`}
        >
          <img
            src={socialIcon[0].iconPath.iconPath}
            alt={socialIcon[0].iconPath.field}
            className="social-contact-icon"
          />
        </Link>
        <Link
          to={{ pathname: socialIcon[1].linkUrl }}
          target="_blank"
          className={`social-contact-link-icon-${socialIcon[1].iconPath.field}`}
        >
          <img
            src={socialIcon[1].iconPath.iconPath}
            alt={socialIcon[1].iconPath.field}
            className="social-contact-icon"
          />
        </Link>
        <Link
          to={{ pathname: socialIcon[2].linkUrl }}
          target="_blank"
          className={`social-contact-link-icon-${socialIcon[2].iconPath.field}`}
        >
          <img
            src={socialIcon[2].iconPath.iconPath}
            alt={socialIcon[2].iconPath.field}
            className="social-contact-icon"
          />
        </Link>
        <Link
          to={{ pathname: socialIcon[3].linkUrl }}
          target="_blank"
          className={`social-contact-link-icon-${socialIcon[3].iconPath.field}`}
        >
          <img
            src={socialIcon[3].iconPath.iconPath}
            alt={socialIcon[3].iconPath.field}
            className="social-contact-icon"
          />
        </Link>
        <Link
          to={{ pathname: socialIcon[4].linkUrl }}
          target="_blank"
          className={`social-contact-link-icon-${socialIcon[4].iconPath.field}`}
        >
          <img
            src={socialIcon[4].iconPath.iconPath}
            alt={socialIcon[4].iconPath.field}
            className="social-contact-icon"
          />
        </Link>
        <Link
          to={{ pathname: socialIcon[5].linkUrl }}
          target="_blank"
          className={`social-contact-link-icon-${socialIcon[5].iconPath.field}`}
        >
          <img
            src={socialIcon[5].iconPath.iconPath}
            alt={socialIcon[5].iconPath.field}
            className="social-contact-icon"
          />
        </Link>
        <Link
          to={{ pathname: photoIcon[0].linkUrl }}
          target="_blank"
          className={`photo-contact-link-icon-${photoIcon[0].iconPath.field}`}
        >
          <img
            src={photoIcon[0].iconPath.iconPath}
            alt={photoIcon[0].iconPath.field}
            className="photo-contact-icon"
          />
        </Link>
        <Link
          to={{ pathname: photoIcon[1].linkUrl }}
          target="_blank"
          className={`photo-contact-link-icon-${photoIcon[1].iconPath.field}`}
        >
          <img
            src={photoIcon[1].iconPath.iconPath}
            alt={photoIcon[1].iconPath.field}
            className="photo-contact-icon"
          />
        </Link>
        <Link
          to={{ pathname: photoIcon[2].linkUrl }}
          target="_blank"
          className={`photo-contact-link-icon-${photoIcon[2].iconPath.field}`}
        >
          <img
            src={photoIcon[2].iconPath.iconPath}
            alt={photoIcon[2].iconPath.field}
            className="photo-contact-icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
