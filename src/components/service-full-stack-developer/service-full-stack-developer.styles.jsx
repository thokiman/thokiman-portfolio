import styled from "styled-components";

export const RightServiceContainerFS = styled.div`
  background-color: rgba(18, 129, 148, 0.75);
  width: 66.3vw;
  height: 68vh;
  position: relative;
  right: 4vw;
  padding: 10px 20px;
  overflow-y: scroll;
  overflow-x: hidden;
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
