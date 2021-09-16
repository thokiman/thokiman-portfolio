import React from 'react';
import EngineerGridItem from '../engineer-grid-item/engineer-grid-item.component';
import {
  EngineerContentContainer,
  NameEngineerSkill,
} from './enginner-grid.styles';

export const EngineerGrid = ({ engineerSkill }) => {
  return engineerSkill.map(({ id, name, itemsPoint }) => {
    return (
      <EngineerContentContainer key={id}>
        <NameEngineerSkill>{name}</NameEngineerSkill>
        <EngineerGridItem itemsPoint={itemsPoint} />
      </EngineerContentContainer>
    );
  });
};

export default EngineerGrid;
