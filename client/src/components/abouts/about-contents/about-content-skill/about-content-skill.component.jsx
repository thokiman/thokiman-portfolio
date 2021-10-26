import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  selectSkillEngineer,
  selectSkillTechnology,
  selectSkillVisualDesignCommunication,
} from '../../../../redux/about/about.selectors';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import EngineerSkill from '../../about-skills/about-skill-engineer/about-skill-engineer.component';
import SkillHeader from '../../about-skills/about-skill-header/about-skill-header.component';
import TechnologySkill from '../../about-skills/about-skill-technology/about-skill-technology.component';
import VisualArtSkill from '../../about-skills/about-skill-visual-art/about-skill-visual-art.component';
import { SkillContainer } from './about-content-skill.styles';
import { measureSkillContainerProps } from './about-content-skill.utils.style';

export const AboutSkill = ({
  match: { url },
  visualDesignCommunication,
  engineer,
  technology,
  isSideBarActive,
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  return (
    <SkillContainer
      className='skill-container'
      $measureskillcontainer={measureSkillContainerProps(viewWidth, viewHeight)}
      $issidebaractive={isSideBarActive}
    >
      <SkillHeader />
      <Switch>
        <Route
          exact
          path={`${url}`}
          render={() => <VisualArtSkill skill={visualDesignCommunication} />}
        />
        <Route
          path={visualDesignCommunication.routeName}
          render={() => <VisualArtSkill skill={visualDesignCommunication} />}
        />
        <Route
          path={engineer.routeName}
          render={() => <EngineerSkill skill={engineer} />}
        />
        <Route
          path={technology.routeName}
          render={() => <TechnologySkill skill={technology} />}
        />
      </Switch>
    </SkillContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  visualDesignCommunication: selectSkillVisualDesignCommunication,
  engineer: selectSkillEngineer,
  technology: selectSkillTechnology,
  isSideBarActive: selectIsSideBarActive,
});

export default withRouter(connect(mapStateToProps)(AboutSkill));
