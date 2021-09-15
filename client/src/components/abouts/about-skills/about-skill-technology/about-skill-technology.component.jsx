import React from 'react';
import TechnologyGrid from '../../about-commons/skill-parts/technology-skill-parts/technology-grid/technology-grid.component';
import {
  AboutTechnologyContentContainer,
  AboutTechnologySkillContainer,
} from './about-skill-technology.styles';

export const TechnologySkill = ({ skill }) => {
  console.log(skill);
  const {
    itemsPoint: {
      architecture,
      backend: { database, framework },
      content,
      deploy,
      desktop,
      frontend: { html, css, javascript },
      general,
      language,
      library,
      test,
      webscraping,
    },
  } = skill;
  return (
    <AboutTechnologySkillContainer>
      <AboutTechnologyContentContainer>
        <TechnologyGrid technologySkill={architecture} />
      </AboutTechnologyContentContainer>
      <AboutTechnologyContentContainer>
        <TechnologyGrid technologySkill={framework} />
      </AboutTechnologyContentContainer>
      <AboutTechnologyContentContainer>
        <TechnologyGrid technologySkill={database} />
      </AboutTechnologyContentContainer>
      <AboutTechnologyContentContainer>
        <TechnologyGrid technologySkill={content} />
      </AboutTechnologyContentContainer>
      <AboutTechnologyContentContainer>
        <TechnologyGrid technologySkill={deploy} />
      </AboutTechnologyContentContainer>
      <AboutTechnologyContentContainer>
        <TechnologyGrid technologySkill={desktop} />
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
        <TechnologyGrid technologySkill={general} />
      </AboutTechnologyContentContainer>
      <AboutTechnologyContentContainer>
        <TechnologyGrid technologySkill={language} />
      </AboutTechnologyContentContainer>
      <AboutTechnologyContentContainer>
        <TechnologyGrid technologySkill={library} />
      </AboutTechnologyContentContainer>
      <AboutTechnologyContentContainer>
        <TechnologyGrid technologySkill={test} />
      </AboutTechnologyContentContainer>
      <AboutTechnologyContentContainer>
        <TechnologyGrid technologySkill={webscraping} />
      </AboutTechnologyContentContainer>
    </AboutTechnologySkillContainer>
  );
};

export default TechnologySkill;
