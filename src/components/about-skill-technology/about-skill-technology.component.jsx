import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import TechnologyGrid from "../technology-grid/technology-grid.component";
import "./about-skill-technology.styles.scss";

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
    <div className="technology-skill-container">
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <div className="technology-content-container">
          <TechnologyGrid technologySkill={general} />
        </div>
        <div className="technology-content-container">
          <TechnologyGrid technologySkill={content} />
        </div>
        <div className="technology-content-container">
          <TechnologyGrid technologySkill={html} />
        </div>
        <div className="technology-content-container">
          <TechnologyGrid technologySkill={css} />
        </div>
        <div className="technology-content-container">
          <TechnologyGrid technologySkill={javascript} />
        </div>
        <div className="technology-content-container">
          <TechnologyGrid technologySkill={language} />
        </div>
        <div className="technology-content-container">
          <TechnologyGrid technologySkill={framework} />
        </div>
        <div className="technology-content-container">
          <TechnologyGrid technologySkill={database} />
        </div>
        <div className="technology-content-container">
          <TechnologyGrid technologySkill={architecture} />
        </div>
        <div className="technology-content-container">
          <TechnologyGrid technologySkill={test} />
        </div>
      </CSSTransitionGroup>
    </div>
  );
};

export default TechnologySkill;
