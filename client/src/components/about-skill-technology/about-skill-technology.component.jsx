import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import TechnologyGrid from "../technology-grid/technology-grid.component";
import {
  AboutTechnologyContentContainer,
  AboutTechnologySkillContainer,
} from "./about-skill-technology.styles";

const TechnologySkill = ({ skill }) => {
  const {
    itemsPoint: {
      general,
      content,
      frontend: { html, css, javascript },
      backend: { language, framework, database },
      architecture,
      test,
    },
  } = skill;
  return (
    <AboutTechnologySkillContainer>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <AboutTechnologyContentContainer>
          <TechnologyGrid technologySkill={general} />
        </AboutTechnologyContentContainer>
        <AboutTechnologyContentContainer>
          <TechnologyGrid technologySkill={content} />
        </AboutTechnologyContentContainer>
        <AboutTechnologyContentContainer>
          <TechnologyGrid technologySkill={html} />
        </AboutTechnologyContentContainer>
        <AboutTechnologyContentContainer>
          <TechnologyGrid technologySkill={css} />
        </AboutTechnologyContentContainer>
        <AboutTechnologyContentContainer>
          <TechnologyGrid technologySkill={javascript} />
        </AboutTechnologyContentContainer>
        <AboutTechnologyContentContainer>
          <TechnologyGrid technologySkill={language} />
        </AboutTechnologyContentContainer>
        <AboutTechnologyContentContainer>
          <TechnologyGrid technologySkill={framework} />
        </AboutTechnologyContentContainer>
        <AboutTechnologyContentContainer>
          <TechnologyGrid technologySkill={database} />
        </AboutTechnologyContentContainer>
        <AboutTechnologyContentContainer>
          <TechnologyGrid technologySkill={architecture} />
        </AboutTechnologyContentContainer>
        <AboutTechnologyContentContainer>
          <TechnologyGrid technologySkill={test} />
        </AboutTechnologyContentContainer>
      </CSSTransitionGroup>
    </AboutTechnologySkillContainer>
  );
};

export default TechnologySkill;
