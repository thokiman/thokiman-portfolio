import { FaArrowCircleUp } from 'react-icons/fa';
import styled, { css, keyframes } from 'styled-components';

const getTimelineImage = ({ $lowWaveImage }) => {
  return $lowWaveImage.item.iconPath;
};
const SideBarActive = css`
  display: none;
`;
const getSideBarActive = (props) => {
  console.log(props);
  if (props.$issidebarhidden) return SideBarActive;
  return null;
};

export const AboutTimelineContainer = styled.div`
  width: 80%;
  font-family: futura-demi;

  @media only screen and (max-width: 800px) {
    width: 100%;
    background-image: url(${getTimelineImage});
    background-color: rgba(116, 198, 212, 1);
    background-size: cover;
    background-blend-mode: multiply;
    ${getSideBarActive}
  }
`;

const aboutTimelineCareerTitle = keyframes`
0% {
                color:  rgba(116,198,212,0.8)
            }

            100% {
                color: rgba(227,225,228,1.0)
            }
`;

export const AboutTimelineCareerTitle = styled.div`
  text-align: left;
  font-size: 350%;
  padding: 0 10px;
  animation: ${aboutTimelineCareerTitle} 9s ease-in-out infinite alternate both;
`;

const aboutScrollToTheTop = keyframes`
        
            0% {
                transform: translateY(45px);
                animation-timing-function: ease-in;
                opacity: 1;
                color:  rgba(18,129,148,0.9);
            }

            24% {
                opacity: 1;
            }

            40% {
                transform: translateY(24px);
                animation-timing-function: ease-in;
            }

            65% {
                transform: translateY(12px);
                animation-timing-function: ease-in;
                color:  rgba(227,225,228,0.5);
            }

            82% {
                transform: translateY(6px);
                animation-timing-function: ease-in;
            }

            93% {
                transform: translateY(4px);
                animation-timing-function: ease-in;
            }

            25%,
            55%,
            75%,
            87% {
                transform: translateY(0px);
                animation-timing-function: ease-out;
            }

            100% {
                transform: translateY(0px);
                animation-timing-function: ease-out;

                color: rgba(63,66,73,0.9);
            }
        

`;

export const AboutScrollToTheTop = styled(FaArrowCircleUp)`
  color: rgba(227, 225, 228, 0.9);
  position: relative;
  left: -40px;
  bottom: 50px;
  width: 30px;
  height: 30px;
  animation: ${aboutScrollToTheTop} 2s both infinite;
  @media only screen and (max-width: 800px) {
    left: 20px;
  }
`;

AboutTimelineContainer.displayName = 'AboutTimelineContainer';
AboutTimelineCareerTitle.displayName = 'AboutTimelineCareerTitle';
AboutScrollToTheTop.displayName = 'AboutScrollToTheTop';
