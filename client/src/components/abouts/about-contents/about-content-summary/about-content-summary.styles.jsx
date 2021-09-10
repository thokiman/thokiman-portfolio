import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as ThokimanExcitedFace } from '../../../../assets/collections-icon/thokiman-icon/collections/excited_face.svg';
import { ReactComponent as ThokimanNormalFace } from '../../../../assets/collections-icon/thokiman-icon/collections/normal_face.svg';

const backgroundSummaryContainerColor = 'rgba(18, 129, 148, 0.8)';
const maxWidthSmartphone = 800;
const grayColor = '#3f4249';
const greenBlueColor = '#128194';
const lightBlueColor = '#74c6d4';
const whiteSmokeColor = '#e3e1e4';

const AboutContentSummaryIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return AboutContentSummaryIsNotActivated;
  return null;
};

export const SummaryContainer = styled.div`
  background-color: ${backgroundSummaryContainerColor};
  width: 64.5vw;
  height: 96%;
  margin-right: 2vw;
  overflow-y: scroll;
  overflow-x: hidden;
  font-family: baskerville-old-face;
  padding: 40px 0;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100%;
    margin: 0;
    ${getSideBarActive}
  }
`;

SummaryContainer.displayName = 'SummaryContainer';

export const AboutSummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(9, 1fr);
  gap: 6px 2px;
  grid-template-areas:
    'thokiman-normal-face thokiman-normal-face about-summary-title about-summary-title'
    'thokiman-normal-face thokiman-normal-face about-summary-title about-summary-title'
    'thokiman-normal-face thokiman-normal-face about-summary-title about-summary-title'
    'about-summary-text-1 about-summary-text-1 about-summary-text-1 about-summary-text-1'
    'about-summary-text-2 about-summary-text-2 about-summary-text-2 about-summary-text-2'
    'about-summary-text-3 about-summary-text-3 about-summary-text-3 about-summary-text-3'
    'about-summary-text-4 about-summary-text-4 about-summary-text-4 about-summary-text-4'
    'download-link download-link download-link download-link'
    'download-link download-link download-link download-link';
  margin: 0 auto;
  width: 94.5%;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    display: flex;
    flex-direction: column;
  }
`;

AboutSummaryContainer.displayName = 'AboutSummaryContainer';

const normalFace = keyframes`
    0% {
      stroke: ${grayColor};
      opacity: 0.7;
    }

    100% {
      stroke: ${greenBlueColor};
      opacity: 0.9;
    }
`;

const excitedFace = keyframes`
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    10%,
                    30%,
                    50%,
                    70% {
                        transform: translateY(-8px);
                    }
                    20%,
                    40%,
                    60% {
                        transform: translateY(8px);
                    }
                    80% {
                        transform: translateY(6.4px);
                    }
                    90% {
                        transform: translateY(-6.4px);
                    }
`;

const downloadText = keyframes`

      from {
        color: ${lightBlueColor};
        opacity: 0.5;
      }

      to {
        color: ${whiteSmokeColor};
        opacity: 0.9;
        border-bottom: ${grayColor} solid 1px;
      }
    

`;

const thankYouText = keyframes`
                    0% {
                        transform: rotateX(70deg);
                        transform-origin: top;
                        opacity: 0;
                    }

                    100% {
                        transform: rotateX(0deg);
                        transform-origin: top;
                        opacity: 1;
                    }

`;
export const ThokimanNormalFaceIcon = styled(ThokimanNormalFace)`
  grid-area: thokiman-normal-face;
  width: 100%;

  .normal-face0,
  .normal-face1,
  .normal-face2,
  .normal-face3,
  .normal-face4,
  .normal-face5,
  .normal-face6,
  .normal-face7,
  .normal-face8,
  .normal-face9,
  .normal-face10,
  .normal-face11,
  .normal-face12,
  .normal-face13,
  .normal-face14,
  .normal-face15,
  .normal-face16,
  .normal-face17,
  .normal-face18,
  .normal-face19,
  .normal-face20,
  .normal-face21,
  .normal-face22,
  .normal-face23,
  .normal-face24,
  .normal-face25,
  .normal-face26,
  .normal-face27 {
    animation: ${normalFace} 2s ease-in-out infinite;
  }
`;

ThokimanNormalFaceIcon.displayName = 'ThokimanNormalFaceIcon';

const AboutSummaryTextStyles = css`
  color: ${whiteSmokeColor};
  display: flex;
  align-items: center;
  font-kerning: auto;
`;

export const AboutSummaryTitle = styled.div`
  ${AboutSummaryTextStyles}
  grid-area: about-summary-title;
  width: 100%;
  font-size: 300%;
  letter-spacing: 0.01em;
  text-align: left;
  margin: 0 auto;
  padding-left: 15px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 180%;
    line-height: 1.2em;
  }
`;

AboutSummaryTitle.displayName = 'AboutSummaryTitle';

const AboutSummaryParagraphStyles = css`
  margin: 0 auto;
  width: 90%;
  font-size: 130%;
  letter-spacing: 0.025em;
  text-align: justify;
  padding-left: 15px;
  line-height: 1.3em;
  text-indent: 1em;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 89%;
    letter-spacing: 0.06em;
    text-align: left;
  }
`;
export const AboutSummaryTextOne = styled.p`
  ${AboutSummaryTextStyles}
  ${AboutSummaryParagraphStyles}
  grid-area: about-summary-text-1;
`;

AboutSummaryTextOne.displayName = 'AboutSummaryTextOne';

export const AboutSummaryTextTwo = styled.p`
  ${AboutSummaryTextStyles}
  ${AboutSummaryParagraphStyles}
grid-area: about-summary-text-2;
`;

AboutSummaryTextTwo.displayName = 'AboutSummaryTextTwo';

export const AboutSummaryTextThree = styled.p`
  ${AboutSummaryTextStyles}
  ${AboutSummaryParagraphStyles}
grid-area: about-summary-text-3;
`;

AboutSummaryTextThree.displayName = 'AboutSummaryTextThree';

export const AboutSummaryTextFour = styled.p`
  ${AboutSummaryTextStyles}
  ${AboutSummaryParagraphStyles}
grid-area: about-summary-text-4;
`;

AboutSummaryTextFour.displayName = 'AboutSummaryTextFour';

export const AboutDownloadLink = styled(Link)`
  grid-area: download-link;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  font-family: futura-book;
`;

AboutDownloadLink.displayName = 'AboutDownloadLink';

export const AboutDownloadText = styled.div`
  color: ${whiteSmokeColor};
  text-decoration: none;
  text-align: center;
  font-size: 180%;
  border-bottom: ${grayColor} solid 1px;
  padding-bottom: 3px;
  letter-spacing: 0.125em;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 150%;
  }
  &:hover {
    animation: ${downloadText} 1.5s linear infinite;
  }
`;
AboutDownloadText.displayName = 'AboutDownloadText';

export const AboutThankYouText = styled.div`
  color: ${lightBlueColor};
  margin: 15px;
  text-decoration: none;
  text-align: center;
  font-size: 180%;
  animation: ${thankYouText} 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  padding-bottom: 3px;
  letter-spacing: 0.125em;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 150%;
  }
`;
AboutThankYouText.displayName = 'AboutThankYouText';

const ThokimanExcitedFaceNoVibration = css`
  opacity: 0.8;
`;
const ThokimanExcitedFaceVibration = css`
  opacity: 0.9;
  transition: opacity ease-in-out 0.5s;
  animation: ${excitedFace} 1.2s ease-in-out both infinite;
  svg:hover .excited-face0,
  svg:hover .excited-face1,
  svg:hover .excited-face2,
  svg:hover .excited-face3,
  svg:hover .excited-face4,
  svg:hover .excited-face5,
  svg:hover .excited-face6,
  svg:hover .excited-face7,
  svg:hover .excited-face8,
  svg:hover .excited-face9,
  svg:hover .excited-face10,
  svg:hover .excited-face11,
  svg:hover .excited-face12,
  svg:hover .excited-face13,
  svg:hover .excited-face14,
  svg:hover .excited-face15,
  svg:hover .excited-face16,
  svg:hover .excited-face17,
  svg:hover .excited-face18,
  svg:hover .excited-face19,
  svg:hover .excited-face20,
  svg:hover .excited-face21,
  svg:hover .excited-face22,
  svg:hover .excited-face23,
  svg:hover .excited-face24,
  svg:hover .excited-face25,
  svg:hover .excited-face26,
  svg:hover .excited-face27,
  svg:hover .excited-face28,
  svg:hover .excited-face29,
  svg:hover .excited-face30,
  svg:hover .excited-face31,
  svg:hover .excited-face32,
  svg:hover .excited-face33,
  svg:hover .excited-face34,
  svg:hover .excited-face35,
  svg:hover .excited-face36,
  svg:hover .excited-face37,
  svg:hover .excited-face38,
  svg:hover .excited-face39,
  svg:hover .excited-face40,
  svg:hover .excited-face41,
  svg:hover .excited-face42,
  svg:hover .excited-face43,
  svg:hover .excited-face44,
  svg:hover .excited-face45,
  svg:hover .excited-face46,
  svg:hover .excited-face47,
  svg:hover .excited-face48,
  svg:hover .excited-face49,
  svg:hover .excited-face50,
  svg:hover .excited-face51,
  svg:hover .excited-face52,
  svg:hover .excited-face53,
  svg:hover .excited-face54,
  svg:hover .excited-face55,
  svg:hover .excited-face56,
  svg:hover .excited-face57,
  svg:hover .excited-face58,
  svg:hover .excited-face59,
  svg:hover .excited-face60,
  svg:hover .excited-face61,
  svg:hover .excited-face62,
  svg:hover .excited-face63,
  svg:hover .excited-face64,
  svg:hover .excited-face65,
  svg:hover .excited-face66,
  svg:hover .excited-face67,
  svg:hover .excited-face68,
  svg:hover .excited-face69,
  svg:hover .excited-face70,
  svg:hover .excited-face71,
  svg:hover .excited-face72,
  svg:hover .excited-face73,
  svg:hover .excited-face74,
  svg:hover .excited-face75,
  svg:hover .excited-face76,
  svg:hover .excited-face77,
  svg:hover .excited-face78,
  svg:hover .excited-face79,
  svg:hover .excited-face80,
  svg:hover .excited-face81,
  svg:hover .excited-face82,
  svg:hover .excited-face83,
  svg:hover .excited-face84,
  svg:hover .excited-face85,
  svg:hover .excited-face86,
  svg:hover .excited-face87 {
    animation-play-state: running;
  }
`;

const getThokimanFaceIcon = ({ $isvibrate }) => {
  if ($isvibrate) {
    return ThokimanExcitedFaceVibration;
  }
  return ThokimanExcitedFaceNoVibration;
};

export const ThokimanExcitedFaceIcon = styled(ThokimanExcitedFace)`
  grid-area: thokiman-excited-face;
  padding: auto 0;
  width: 75%;
  height: 75%;
  opacity: 0.8;
  ${getThokimanFaceIcon}
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100%;
    height: 100%;
  }
`;

ThokimanExcitedFaceIcon.displayName = 'ThokimanExcitedFaceIcon';
