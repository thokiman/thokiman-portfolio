import styled, { css } from "styled-components";

const SideBarActive = css`
  display: none;
`;
const getSideBarActive = (props) => {
  if (props.$issidebarhidden) return SideBarActive;
  return null;
};

export const SkillContainer = styled.div`
  background-color: rgba(18, 129, 148, 0.8);
  width: 64.5vw;
  margin-right: 2vw;
  padding: 40px 0;
  height: 98%;
  font-family: baskerville-old-face;
  @media only screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
    ${getSideBarActive}
  }
`;

SkillContainer.displayName = "SkillContainer";
