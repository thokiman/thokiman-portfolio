import styled, { css } from 'styled-components';
const whiteSmokeColor = '#e3e1e4';
const maxWidthSmartphone = 800;
const EngineerSkillStyles = css`
  grid-row: span 3;
  text-align: center;
  font-kerning: auto;
  color: ${whiteSmokeColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescriptionEngineerSkill = styled.div`
  ${EngineerSkillStyles}
  line-height: 1.5em;
  width: 100%;
  font-size: 2.3vw;
  letter-spacing: 0.03em;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 3.5vw;
  }
`;

DescriptionEngineerSkill.displayName = 'DescriptionEngineerSkill';
