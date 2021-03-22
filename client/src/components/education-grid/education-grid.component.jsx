import React from "react";

import {
  EducationImage,
  EducationImageContainer,
  EducationImageItems,
} from "./education-grid.styles";

const EducationGrid = ({ imagePath }) => {
  return (
    <EducationImageContainer>
      {imagePath.map(({ id, field, iconPath }) => {
        return (
          <EducationImageItems key={id}>
            <EducationImage src={`${iconPath}`} alt={`${field}`} />
          </EducationImageItems>
        );
      })}
    </EducationImageContainer>
  );
};

export default EducationGrid;
