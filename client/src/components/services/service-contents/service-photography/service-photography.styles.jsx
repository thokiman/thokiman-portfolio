import styled, { css } from 'styled-components';

const backgroundColorRightServiceContainerPg = 'rgba(18, 129, 148, 0.75)';
const maxWidthSmartphone = 800;
const lightBlueColor = '#74c6d4';

const ServicePhotographyIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return ServicePhotographyIsNotActivated;
  return null;
};

export const RightServiceContainerPg = styled.div`
  background-color: ${backgroundColorRightServiceContainerPg};
  width: 66.3vw;
  height: 68vh;
  padding: 10px 20px;
  position: relative;
  right: 4vw;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  overflow-x: hidden;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    overflow-y: hidden;
    width: 100%;
    right: 0;
    height: 280vh;
    ${getSideBarActive}
    @media only screen and (max-width: 550px) {
      height: 270vh;
      ${getSideBarActive}
    }
    @media only screen and (max-width: 470px) and (max-height: 823px) {
      height: 180vh;
      ${getSideBarActive}
    }
    @media only screen and (max-width: 470px) and (max-height: 812px) {
      height: 175vh;
      ${getSideBarActive}
    }
    @media only screen and (max-width: 470px) and (max-height: 736px) {
      height: 220vh;
      ${getSideBarActive}
    }
    @media only screen and (max-width: 470px) and (max-height: 667px) {
      height: 220vh;
      ${getSideBarActive}
    }
    @media only screen and (max-width: 350px) and (max-height: 568px) {
      height: 235vh;
      ${getSideBarActive}
    }
    @media only screen and (max-width: 300px) {
      height: 225vh;
      ${getSideBarActive}
    }
  }
`;

export const ServiceStockPhotos = styled.span`
  margin-top: 2vh;
  font-family: futura-demi;
  font-size: 2.5vw;
  margin-bottom: 15px;
  text-indent: 0.6em;
  color: ${lightBlueColor};
  letter-spacing: 0.02em;
  font-kerning: auto;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 6vw;
  }
`;

export const RightServiceContentPg = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto 0;
  padding: 20px;
`;

RightServiceContainerPg.displayName = 'RightServiceContainerPg';
RightServiceContentPg.displayName = 'RightServiceContentPg';
