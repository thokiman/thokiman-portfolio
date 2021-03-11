import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PageShell from "../../components/page-shell/page-shell.component";
import AboutDropdown from "../../components/about-dropdown/about-dropdown.component";
import AboutHomeContent from "../../components/about-content/about-content.component";
import AboutSkill from "../../components/about-content-skill/about-content-skill.component";
import AboutEducation from "../../components/about-content-education/about-content-education.component";
import AboutProject from "../../components/about-content-project/about-content-project.component";
import AboutSummary from "../../components/about-content-summary/about-content-summary.component";
import AboutTimelineCareer from "../../components/about-timeline-career/about-timeline-career.component";

import "./about.styles.scss";
import {
  selectAboutRoute,
  selectEducationRoute,
  selectProjectRoute,
  selectSkillRoute,
  selectSummaryRoute,
  selectTimelineCareerRoute,
} from "../../redux/about/about.selectors";

const About = ({
  match: { url },
  location: { pathname },
  aboutRoute,
  skillRoute,
  educationRoute,
  projectRoute,
  summaryRoute,
  timelineCareerRoute,
}) => {
  return (
    <div
      className={
        pathname.match(`${aboutRoute}${timelineCareerRoute}$`)
          ? "about-container-timeline"
          : "about-container"
      }
    >
      <AboutDropdown />
      <Switch>
        <Route exact path={aboutRoute} component={AboutHomeContent} />
        <Route path={skillRoute} component={AboutSkill} />
        <Route path={educationRoute} component={AboutEducation} />
        <Route path={projectRoute} component={AboutProject} />
        <Route path={summaryRoute} component={AboutSummary} />
        <Route
          path={`${aboutRoute}${timelineCareerRoute}`}
          component={AboutTimelineCareer}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  aboutRoute: selectAboutRoute,
  skillRoute: selectSkillRoute,
  educationRoute: selectEducationRoute,
  projectRoute: selectProjectRoute,
  summaryRoute: selectSummaryRoute,
  timelineCareerRoute: selectTimelineCareerRoute,
});

export default connect(mapStateToProps)(PageShell(About));
