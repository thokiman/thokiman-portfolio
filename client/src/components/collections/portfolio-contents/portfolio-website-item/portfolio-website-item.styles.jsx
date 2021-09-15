import { Link } from 'react-router-dom';
import styled from 'styled-components';

const maxWidthSmartphone = 800;

const greenBlueColor8 = '#8BFDFE';
const greenBlueColor9 = '#28D7FE';

const greenOptionHoverColor25 = 'rgba(18, 129, 148, 0.25)';
const greenOptionHoverColor40 = 'rgba(18, 129, 148, 0.40)';
const greenOptionHoverColor55 = 'rgba(18, 129, 148, 0.55)';
const greenOptionHoverColor60 = 'rgba(18, 129, 148, 0.6)';

const backgroundColor = '#000000';

export const PortfolioWebsiteItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PortfolioWebsiteItemLink = styled(Link)`
  width: fit-content;
  font-family: futura-book;
  text-decoration: none;
  color: ${greenBlueColor8};
  font-size: 3vw;
  letter-spacing: 0.1em;
  margin-left: 5vw;
  margin-top: 4vw;
  margin-bottom: 2vw;

  border: 4px solid ${greenBlueColor9};
  padding: 1.1vw;

  box-shadow: -10px -10px 0 -3px ${backgroundColor},
    -10px -10px ${greenOptionHoverColor60},
    -20px -20px 0 -3px ${backgroundColor},
    -20px -20px ${greenOptionHoverColor55},
    -30px -30px 0 -3px ${backgroundColor},
    -30px -30px ${greenOptionHoverColor40},
    -40px -40px 0 -3px ${backgroundColor},
    -40px -40px ${greenOptionHoverColor25};
  transition: box-shadow 1s, top 1s, left 1s;
  position: relative;
  top: 0;
  left: 0;

  &:hover {
    top: -40px;
    left: -40px;

    box-shadow: 0 0 0 -3px ${backgroundColor},
      0 0 0 0 ${greenOptionHoverColor60}, 0 0 0 -3px ${backgroundColor},
      0 0 0 0 ${greenOptionHoverColor55}, 0 0 0 -3px ${backgroundColor},
      0 0 0 0 ${greenOptionHoverColor40}, 0 0 0 -3px ${backgroundColor},
      0 0 0 0 ${greenOptionHoverColor25};
  }

  @media only screen and (max-width: 900px) {
    position: absolute;
    font-size: 2vw;
    top: 31.5vh;
    left: 45vw;
    margin: 0.5vw;
    box-shadow: none;
    &:hover {
      top: 31.5vh;
      left: 45vw;
    }
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 18.2vh;
    left: 45vw;
    box-shadow: none;
    &:hover {
      top: 18.2vh;
      left: 45vw;
    }
  }
  @media only screen and (max-width: 673px) {
    top: 18vh;
    left: 47vw;
    box-shadow: none;
    &:hover {
      top: 18.8vh;
      left: 47vw;
    }
  }
  @media only screen and (max-width: 500px) {
    top: 18.8vh;
    left: 49vw;
    box-shadow: none;
    &:hover {
      top: 18.8vh;
      left: 49vw;
    }
  }
  @media only screen and (max-width: 410px) {
    top: 19vh;
    left: 52vw;
    box-shadow: none;
    &:hover {
      top: 19vh;
      left: 52vw;
    }
  }
  @media only screen and (max-width: 320px) {
    top: 18.8vh;
    left: 53vw;
    box-shadow: none;
    &:hover {
      top: 18.8vh;
      left: 53vw;
    }
  }
  @media only screen and (max-width: 280px) {
    font-size: 2vw;
    top: 19vh;
    left: 56vw;
    box-shadow: none;
    &:hover {
      top: 19vh;
      left: 56vw;
    }
  }

  @media only screen and (max-width: 150px) {
    font-size: 0.5vw;
    top: 19.5vh;
    left: 63vw;
    box-shadow: none;
    &:hover {
      top: 19.5vh;
      left: 63vw;
    }
  }
`;
