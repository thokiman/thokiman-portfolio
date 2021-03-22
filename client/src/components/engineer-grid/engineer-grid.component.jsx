import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import EngineerGridItem from "../engineer-grid-item/engineer-grid-item.component";
import {
  EngineerContentContainer,
  NameEngineerSkill,
} from "./enginner-grid.styles";

const EngineerGrid = ({ engineerSkill }) => {
  return engineerSkill.map(({ id, name, itemsPoint }) => {
    return (
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
        key={id}
      >
        <EngineerContentContainer>
          <NameEngineerSkill>{name}</NameEngineerSkill>
          <EngineerGridItem itemsPoint={itemsPoint} />
        </EngineerContentContainer>
      </CSSTransitionGroup>
    );
  });
};

export default EngineerGrid;
