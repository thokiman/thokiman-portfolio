import styled, { css } from "styled-components";
const SideBarActive = css`
  display: none;
`;
const getSideBarActive = (props) => {
  if (props.$issidebarhidden) return SideBarActive;
  return null;
};

export const RightServiceContainerFS = styled.div`
  background-color: rgba(18, 129, 148, 0.75);
  width: 66.3vw;
  height: 68vh;
  position: relative;
  right: 4vw;
  padding: 10px 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  @media only screen and (max-width: 800px) {
    width: 100%;
    right: 0;
    height: 50vh;
    ${getSideBarActive}
  }
`;

export const RightServiceContentFS = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto 0;
  padding: 20px;
`;

RightServiceContainerFS.displayName = "RightServiceContainerFS";
RightServiceContentFS.displayName = "RightServiceContentFS";