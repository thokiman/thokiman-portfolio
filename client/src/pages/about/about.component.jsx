import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import AboutEducation from '../../components/abouts/about-contents/about-content-education/about-content-education.component';
import AboutProject from '../../components/abouts/about-contents/about-content-project/about-content-project.component';
import AboutSkill from '../../components/abouts/about-contents/about-content-skill/about-content-skill.component';
import AboutSummary from '../../components/abouts/about-contents/about-content-summary/about-content-summary.component';
import AboutHomeContent from '../../components/abouts/about-contents/about-content/about-content.component';
import AboutDropdown from '../../components/abouts/about-dropdowns/about-dropdown/about-dropdown.component';
import AboutTimelineCareer from '../../components/abouts/about-timeline-careers/about-timeline-career/about-timeline-career.component';
import Footer from '../../components/footers/footer/footer.component';
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
import { AboutElement, AboutIsNotActivated, AboutPage } from './about.styles';
import {
  measureAbouteHeight,
  measureAboutIsNotActivated,
} from './about.utils.styles';

export const About = ({
  location: { pathname },
  match,
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
    <>
      <AboutElement>
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
            <AboutIsNotActivated
              $aboutisnotactivatedprops={measureAboutIsNotActivated(
                viewWidth,
                viewHeight
              )}
            >
              Abo
              <br />
              ut
            </AboutIsNotActivated>
          ) : null}

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
        </AboutPage>

        <Footer />
      </AboutElement>
    </>
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

export default withRouter(connect(mapStateToProps)(About));
