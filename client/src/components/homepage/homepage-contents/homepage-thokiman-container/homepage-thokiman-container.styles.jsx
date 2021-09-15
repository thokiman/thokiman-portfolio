import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as BlueOutlineThokiman } from '../../../../assets/collections-icon/thokiman-icon/logo/outline/thokiman_head_logo_blue.svg';
import { ReactComponent as WhiteOutlineThokimanSkeleton } from '../../../../assets/collections-icon/thokiman-icon/page/thokiman_skeleton_white.svg';

const maxWidthSmartphone = 800;
const backgroundColorHomepageThokimanContainer = 'rgba(116, 198, 212, 0.5)';
const lightBlueColor = '#74c6d4';
const getHomepageImage = ({ $rockWaveImage }) => {
  return $rockWaveImage.item.iconPath;
};

const HomepageThokimanContainerIsNotActivated = css`
  display: none;
`;

const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return HomepageThokimanContainerIsNotActivated;
  return null;
};

export const HomepageThokimanContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110vh;
  background-image: url(${getHomepageImage});
  background-size: cover;
`;

export const HomepageThokimanContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${backgroundColorHomepageThokimanContainer};
  width: 96vw;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    ${getSideBarActive}
  }
`;
export const HomepageThokimanHeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 500px;
`;

export const HomepageThokimanBodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 100%;
  width: 450px;
`;

export const HomepageThokimanHeadOutline = styled(BlueOutlineThokiman)`
  background-size: cover;
  padding: 0 5px;
  background-color: ${lightBlueColor};
  height: 100%;
  width: 100%;
  .thoki-out-blue {
    filter: url(#noise);
  }
`;
const whiteThokimanSkeleton = keyframes`
                             to {
                                 stroke-dashoffset: 0%;
                             }
`;
export const HomepageWhiteThokimanSkeleton = styled(
  WhiteOutlineThokimanSkeleton
)`
  width: 100%;
  height: 100%;

  .thokiman-skeleton-white {
    stroke-miterlimit: 10;
    stroke-dasharray: 700 150;
    stroke-dashoffset: 100%;
    animation: ${whiteThokimanSkeleton} 2s ease-in-out alternate-reverse
      infinite;
  }
`;
HomepageThokimanContentContainer.displayName =
  'HomepageThokimanContentContainer';
HomepageThokimanContainer.displayName = 'HomepageThokimanContainer';
HomepageThokimanHeadContainer.displayName = 'HomepageThokimanHeadContainer';
HomepageThokimanHeadOutline.displayName = 'HomepageThokimanHeadOutline';
HomepageThokimanBodyContainer.displayName = 'HomepageThokimanBodyContainer';
HomepageWhiteThokimanSkeleton.displayName = 'HomepageWhiteThokimanSkeleton';
