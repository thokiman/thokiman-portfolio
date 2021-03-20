import styled, { css } from "styled-components";

export const EngineerContentContainer = styled.div`
  margin: 4px auto;
  border-top: #74c6d4 solid 2px;
  border-bottom: #74c6d4 solid 2px;
  position: relative;
  top: 10px;
  width: 100%;
  height: 50%;
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
  color: #e3e1e4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NameEngineerSkill = styled.div`
  ${EngineerSkillStyles}

  padding: 10px;
  font-size: 3vw;
  letter-spacing: 0.04em;
`;

EngineerContentContainer.displayName = "EngineerContentContainer";
NameEngineerSkill.displayName = "NameEngineerSkill";
