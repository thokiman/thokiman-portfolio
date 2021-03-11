import React from "react";

import "./about-achievement-experience.styles.scss";

const AboutAchievementProject = ({ lastExperience }) => {
  return (
    <div className="achievement-experience-project-container">
      <div className="achievement-experience-project-title">
        Experience of Achievement
      </div>
      {lastExperience.map(({ id, name, description, date, imagePath }) => {
        return (
          <div key={id} className="achievement-experience-project">
            <div className="name-achievement-experience-project">{name}</div>
            <div className="date-achievement-experience-project">{date}</div>
            <div key={id} className="image-achievement-experience-container">
              {imagePath.map(({ id, field, iconPath }) => {
                return (
                  <img
                    key={id}
                    src={iconPath}
                    alt={field}
                    className="image-achievement-experience"
                  />
                );
              })}
            </div>
            <div className="description-achievement-experience-project">
              {description}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutAchievementProject;
