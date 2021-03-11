import React from "react";

import "./about-project-experience.styles.scss";

const AboutExperienceProject = ({ experience }) => {
  return (
    <div className="experience-project-container">
      <div className="experience-project-title">Experience Project</div>
      {experience.map(({ id, name, description }) => {
        return (
          <div key={id} className="experience-project">
            <div className="name-experience-project">{name}</div>
            <div className="description-experience-project">{description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutExperienceProject;
