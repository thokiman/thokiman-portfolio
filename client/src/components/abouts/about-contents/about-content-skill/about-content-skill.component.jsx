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

export const AboutSkill = ({
  match: { url },
  visualDesignCommunication,
  engineer,
  technology,
  isSideBarActive,
}) => {
  return (
    <SkillContainer $issidebaractive={isSideBarActive}>
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
