import styled from "styled-components";

export const RightServiceContainerGd = styled.div`
  background-color: rgba(18, 129, 148, 0.75);
  width: 66.3vw;
  height: 68vh;
  padding: 10px 20px;
  position: relative;
  right: 4vw;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const RightServiceContentGd = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto 0;
  padding: 20px;
`;

RightServiceContainerGd.displayName = "RightServiceContainerGd";
RightServiceContentGd.displayName = "RightServiceContentGd";
