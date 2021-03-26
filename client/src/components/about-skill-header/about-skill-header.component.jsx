import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectSkillEngineerRoute,
  selectSkillRoute,
  selectSkillTechnologyRoute,
  selectSkillVisualArtRoute,
} from "../../redux/about/about.selectors";
import {
  AboutHeaderSkillContainer,
  AboutTextBox,
} from "./about-skill-header.styles";

export const SkillHeader = ({
  location: { pathname },
  skillRoute,
  visualArtRoute,
  engineerRoute,
  technologyRoute,
}) => {
  return (
    <AboutHeaderSkillContainer>
      <AboutTextBox
        to={`${visualArtRoute}`}
        $matchpath={!!pathname.match(`(${skillRoute}$|${visualArtRoute}$)`)}
      >
        Visual Art
      </AboutTextBox>
      <AboutTextBox
        to={`${engineerRoute}`}
        $matchpath={!!pathname.match(`${engineerRoute}$`)}
      >
        Engineer
      </AboutTextBox>
      <AboutTextBox
        to={`${technologyRoute}`}
        $matchpath={pathname.match(`${technologyRoute}`)}
      >
        Technology
      </AboutTextBox>
    </AboutHeaderSkillContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  skillRoute: selectSkillRoute,
  visualArtRoute: selectSkillVisualArtRoute,
  engineerRoute: selectSkillEngineerRoute,
  technologyRoute: selectSkillTechnologyRoute,
});

export default withRouter(connect(mapStateToProps)(SkillHeader));
