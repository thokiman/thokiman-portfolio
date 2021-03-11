import React from "react";
import { Link } from "react-scroll";

import "./timeline-career-link.styles.scss";

const TimelineCareerLink = ({
  TimelineIcon,
  year,
  placement,
  isClick,
  yearClick,
}) => {
  return (
    <div>
      {placement === "upper" ? (
        <div className={`year-link-${placement}`}>
          <Link
            activeClass="active"
            to={year}
            spy={true}
            smooth={true}
            duration={800}
            className={
              isClick ? `year-box-${placement}-active` : `year-box-${placement}`
            }
            onClick={() => yearClick()}
          >
            {year}
          </Link>
          <TimelineIcon
            className={
              isClick
                ? `timeline-pointer-active-${placement}`
                : `timeline-pointer-${placement}`
            }
          />
        </div>
      ) : (
        <div className={`year-link-${placement}`}>
          <TimelineIcon
            className={
              isClick
                ? `timeline-pointer-active-${placement}`
                : `timeline-pointer-${placement}`
            }
          />
          <Link
            activeClass="active"
            to={year}
            spy={true}
            smooth={true}
            duration={800}
            className={
              isClick ? `year-box-${placement}-active` : `year-box-${placement}`
            }
            onClick={() => yearClick()}
          >
            {year}
          </Link>
        </div>
      )}
    </div>
  );
};

export default TimelineCareerLink;
