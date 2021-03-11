import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectSkillEngineer,
  selectSkillTechnology,
  selectSkillVisualDesignCommunication,
} from "../../redux/about/about.selectors";
import SkillHeader from "../about-skill-header/about-skill-header.component";
import VisualArtSkill from "../about-skill-visual-art/about-skill-visual-art.component";
import EngineerSkill from "../about-skill-engineer/about-skill-engineer.component";
import TechnologySkill from "../about-skill-technology/about-skill-technology.component";
import "./about-content-skill.styles.scss";

const AboutSkill = ({
  match: { url },
  visualDesignCommunication,
  engineer,
  technology,
}) => {
  return (
    <div className="skill-container">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <SkillHeader />
        <Switch>
          <Route
            exact
            path={`${url}`}
            render={() => <VisualArtSkill skill={visualDesignCommunication} />}
          />
          <Route
            path={`${url}/visualart`}
            render={() => <VisualArtSkill skill={visualDesignCommunication} />}
          />
          <Route
            path={`${url}/engineer`}
            render={() => <EngineerSkill skill={engineer} />}
          />
          <Route
            path={`${url}/technology`}
            render={() => <TechnologySkill skill={technology} />}
          />
        </Switch>
      </ReactCSSTransitionGroup>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  visualDesignCommunication: selectSkillVisualDesignCommunication,
  engineer: selectSkillEngineer,
  technology: selectSkillTechnology,
});

export default withRouter(connect(mapStateToProps)(AboutSkill));
