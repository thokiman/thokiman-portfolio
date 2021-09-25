import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import SpinnerLoading from '../../components/commons/spinner-loading/spinner-loading.component';
import useWindowDimensions from '../../components/hooks/window-dimensions/useWindowDimensions.component';
import {
  selectAboutRoute,
  selectEducationRoute,
  selectProjectRoute,
  selectRockWaveImage,
  selectSkillEngineerRoute,
  selectSkillRoute,
  selectSkillTechnologyRoute,
  selectSkillVisualArtRoute,
  selectSummaryRoute,
  selectTimelineCareerRoute,
} from '../../redux/about/about.selectors';
import { selectIsSideBarActive } from '../../redux/header/header.selectors';
import { AboutIsNotActivated, AboutPage } from './about.styles';
import { measureAbouteHeight } from './about.utils';

const AboutDropdown = lazy(() =>
  import(
    '../../components/abouts/about-dropdowns/about-dropdown/about-dropdown.component'
  )
);
const AboutHomeContent = lazy(() =>
  import(
    '../../components/abouts/about-contents/about-content/about-content.component'
  )
);
const AboutSkill = lazy(() =>
  import(
    '../../components/abouts/about-contents/about-content-skill/about-content-skill.component'
  )
);
const AboutEducation = lazy(() =>
  import(
    '../../components/abouts/about-contents/about-content-education/about-content-education.component'
  )
);
const AboutProject = lazy(() =>
  import(
    '../../components/abouts/about-contents/about-content-project/about-content-project.component'
  )
);
const AboutSummary = lazy(() =>
  import(
    '../../components/abouts/about-contents/about-content-summary/about-content-summary.component'
  )
);
const AboutTimelineCareer = lazy(() =>
  import(
    '../../components/abouts/about-timeline-careers/about-timeline-career/about-timeline-career.component'
  )
);

export const About = ({
  location: { pathname },
  aboutRoute,
  skillRoute,
  aboutVisualArtSkillRoute,
  aboutEngineerSkillRoute,
  aboutTechnologySkillRoute,
  educationRoute,
  projectRoute,
  summaryRoute,
  timelineCareerRoute,
  isSideBarActive,
  rockWaveImage,
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();

  return (
    <AboutPage
      $aboutheight={measureAbouteHeight(
        pathname,
        viewWidth,
        viewHeight,
        aboutRoute,
        skillRoute,
        aboutVisualArtSkillRoute,
        aboutEngineerSkillRoute,
        aboutTechnologySkillRoute,
        educationRoute,
        projectRoute,
        summaryRoute,
        timelineCareerRoute
      )}
      $matchpath={!!pathname.match(`${aboutRoute}${timelineCareerRoute}$`)}
      $issidebaractive={isSideBarActive}
      $rockWaveImage={rockWaveImage}
    >
      {isSideBarActive ? (
        <AboutIsNotActivated>
          Abo
          <br />
          ut
        </AboutIsNotActivated>
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
  aboutVisualArtSkillRoute: selectSkillVisualArtRoute,
  aboutEngineerSkillRoute: selectSkillEngineerRoute,
  aboutTechnologySkillRoute: selectSkillTechnologyRoute,
  educationRoute: selectEducationRoute,
  projectRoute: selectProjectRoute,
  summaryRoute: selectSummaryRoute,
  timelineCareerRoute: selectTimelineCareerRoute,
  isSideBarActive: selectIsSideBarActive,
  rockWaveImage: selectRockWaveImage,
});

export default connect(mapStateToProps)(About);
