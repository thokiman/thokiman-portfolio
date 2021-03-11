import React from "react";

import { ReactComponent as ThokimanHeadColor } from "../../assets/collections-icon/thokiman-icon/logo/color/thokiman_head_color.svg";
import { ReactComponent as WhiteOutlineThokiman } from "../../assets/collections-icon/thokiman-icon/logo/outline/thokiman_head_logo_cream.svg";
import "./service-content.styles.scss";

const ServiceHomeContent = () => {
  return (
    <div className="right-service-container">
      <ThokimanHeadColor className="thokiman-head-color" />
      <WhiteOutlineThokiman className="thokiman-head-outline-cream" />
    </div>
  );
};

export default ServiceHomeContent;
