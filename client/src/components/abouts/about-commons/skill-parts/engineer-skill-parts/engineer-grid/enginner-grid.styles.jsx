import styled, { css } from 'styled-components';

const lightBlueColor = '#74c6d4';
const whiteSmokeColor = '#e3e1e4';
const maxWidthSmartphone = 800;
export const EngineerContentContainer = styled.div`
  margin: 4px auto;
  border-top: ${lightBlueColor} solid 2px;
  border-bottom: ${lightBlueColor} solid 2px;
  position: relative;
  top: 10px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat (auto, 1fr);
  gap: 0px 5px;
  font-family: baskerville-old-face;
`;
const EngineerSkillStyles = css`
  grid-row: span 3;
  text-align: center;
  font-kerning: auto;
  color: ${whiteSmokeColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NameEngineerSkill = styled.div`
  ${EngineerSkillStyles}

  padding: 10px;
  font-size: 3vw;
  letter-spacing: 0.04em;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 5vw;
  }
`;

EngineerContentContainer.displayName = 'EngineerContentContainer';
NameEngineerSkill.displayName = 'NameEngineerSkill';
