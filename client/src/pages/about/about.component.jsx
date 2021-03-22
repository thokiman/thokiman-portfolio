import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PageShell from "../../components/page-shell/page-shell.component";
import { AboutPage, AboutSideBarHide } from "./about.styles";
import {
  selectAboutRoute,
  selectEducationRoute,
  selectProjectRoute,
  selectSkillRoute,
  selectSummaryRoute,
  selectTimelineCareerRoute,
} from "../../redux/about/about.selectors";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";
import SpinnerLoading from "../../components/spinner-loading/spinner-loading.component";

const AboutDropdown = lazy(() =>
  import("../../components/about-dropdown/about-dropdown.component")
);
const AboutHomeContent = lazy(() =>
  import("../../components/about-content/about-content.component")
);
const AboutSkill = lazy(() =>
  import("../../components/about-content-skill/about-content-skill.component")
);
const AboutEducation = lazy(() =>
  import(
    "../../components/about-content-education/about-content-education.component"
  )
);
const AboutProject = lazy(() =>
  import(
    "../../components/about-content-project/about-content-project.component"
  )
);
const AboutSummary = lazy(() =>
  import(
    "../../components/about-content-summary/about-content-summary.component"
  )
);
const AboutTimelineCareer = lazy(() =>
  import(
    "../../components/about-timeline-career/about-timeline-career.component"
  )
);

const About = ({
  location: { pathname },
  aboutRoute,
  skillRoute,
  educationRoute,
  projectRoute,
  summaryRoute,
  timelineCareerRoute,
  isSideBarHidden,
}) => {
  return (
    <AboutPage
      matchpath={!!pathname.match(`${aboutRoute}${timelineCareerRoute}$`)}
      $issidebarhidden={isSideBarHidden}
    >
      {isSideBarHidden ? (
        <AboutSideBarHide>
          Abo
          <br />
          ut
        </AboutSideBarHide>
      ) : null}
      <AboutDropdown />
      <Switch>
        <Suspense fallback={<SpinnerLoading />}>
          <Route exact path={aboutRoute} component={AboutHomeContent} />
          <Route path={skillRoute} component={AboutSkill} />
          <Route path={educationRoute} component={AboutEducation} />
          <Route path={projectRoute} component={AboutProject} />
          <Route path={summaryRoute} component={AboutSummary} />
          <Route
            path={`${aboutRoute}${timelineCareerRoute}`}
            component={AboutTimelineCareer}
          />
        </Suspense>
      </Switch>
    </AboutPage>
  );
};

const mapStateToProps = createStructuredSelector({
  aboutRoute: selectAboutRoute,
  skillRoute: selectSkillRoute,
  educationRoute: selectEducationRoute,
  projectRoute: selectProjectRoute,
  summaryRoute: selectSummaryRoute,
  timelineCareerRoute: selectTimelineCareerRoute,
  isSideBarHidden: selectIsSideBarHidden,
});

export default connect(mapStateToProps)(PageShell(About));
