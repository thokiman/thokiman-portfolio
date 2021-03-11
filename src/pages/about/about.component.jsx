import React from "react";
import { Route, Switch } from "react-router-dom";

import PageShell from "../../components/page-shell/page-shell.component";
import AboutDropdown from "../../components/about-dropdown/about-dropdown.component";
import AboutHomeContent from "../../components/about-content/about-content.component";
import AboutSkill from "../../components/about-content-skill/about-content-skill.component";
import AboutEducation from "../../components/about-content-education/about-content-education.component";
import AboutProject from "../../components/about-content-project/about-content-project.component";
import AboutSummary from "../../components/about-content-summary/about-content-summary.component";
import AboutTimelineCareer from "../../components/about-timeline-career/about-timeline-career.component";

import "./about.styles.scss";

const About = ({ match: { url }, location: { pathname } }) => {
  return (
    <div
      className={
        pathname.match(`${url}/timelinecareer$`)
          ? "about-container-timeline"
          : "about-container"
      }
    >
      <AboutDropdown />
      <Switch>
        <Route exact path={`${url}`} component={AboutHomeContent} />
        <Route path={`${url}/skill`} component={AboutSkill} />
        <Route path={`${url}/education`} component={AboutEducation} />
        <Route path={`${url}/project`} component={AboutProject} />
        <Route path={`${url}/summary`} component={AboutSummary} />
        <Route path={`${url}/timelinecareer`} component={AboutTimelineCareer} />
      </Switch>
    </div>
  );
};

export default PageShell(About);
