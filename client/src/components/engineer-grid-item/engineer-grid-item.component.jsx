import React from "react";

import { DescriptionEngineerSkill } from "./engineer-grid-item.styles";

export const EngineerGridItem = ({ itemsPoint }) => {
  return itemsPoint.map(({ id, description }) => {
    return (
      <DescriptionEngineerSkill key={id}>
        {description}
      </DescriptionEngineerSkill>
    );
  });
};

export default EngineerGridItem;
