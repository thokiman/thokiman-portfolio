import React from "react";

import { about } from "../../data.object/abouts.data";
import { ReactComponent as BlueOutlineThokiman } from "../../assets/collections-icon/thokiman-icon/logo/outline/thokiman_head_logo_blue.svg";
import { ReactComponent as WhiteOutlineThokimanSkeleton } from "../../assets/collections-icon/thokiman-icon/page/thokiman_skeleton_white.svg";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="thokiman-content-container">
        <div className="thokiman-container">
          <div className="thokiman-head-container">
            <BlueOutlineThokiman className="thokiman-head-outline" />
          </div>

          <div className="thokiman-body-container">
            <WhiteOutlineThokimanSkeleton className="white-thokiman-skeleton" />
          </div>
        </div>
      </div>
      <div className="about-content-container">
        <div className="profile-image-container">
          <div className="background-profile-image">
            <div className="profile-image"></div>
          </div>
        </div>
        <div className="profile-text-container">
          <div className="background-profile-text">
            <div className="name-text">Thomas Santosa</div>
            <div className="activity-text">
              {about.aboutPath.items.personalSummary.items.shortDescription}
            </div>
            <div className="quote-text">
              {about.aboutPath.items.personalSummary.items.quote}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
