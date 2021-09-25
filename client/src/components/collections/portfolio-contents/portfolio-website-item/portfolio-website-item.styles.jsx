import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const maxWidthSmartphone = 800;

const greenBlueColor8 = '#8BFDFE';
const greenBlueColor9 = '#28D7FE';

const greenOptionHoverColor25 = 'rgba(18, 129, 148, 0.25)';
const greenOptionHoverColor40 = 'rgba(18, 129, 148, 0.40)';
const greenOptionHoverColor55 = 'rgba(18, 129, 148, 0.55)';
const greenOptionHoverColor60 = 'rgba(18, 129, 148, 0.6)';

const backgroundColor = '#000000';

const PortfolioWebsiteItemIsNotActivated = css`
  display: none;
`;
const PortfolioWebsiteItemIsActivated = css`
  display: flex;
  flex-direction: column;
`;

const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return PortfolioWebsiteItemIsNotActivated;
  return PortfolioWebsiteItemIsActivated;
};

export const PortfolioWebsiteItemContainer = styled.div`
  ${getSideBarActive}
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
    border: 1px solid ${greenBlueColor9};
    &:hover {
      top: 31.5vh;
      left: 45vw;
    }
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 17.5vh;
    left: 45vw;

    &:hover {
      top: 17.5vh;
      left: 45vw;
    }
  }
  @media only screen and (max-width: 673px) {
    top: 18vh;
    left: 47vw;

    &:hover {
      top: 18.8vh;
      left: 47vw;
    }
  }
  @media only screen and (max-width: 550px) {
    top: 20vh;
    left: 47vw;

    &:hover {
      top: 20vh;
      left: 47vw;
    }
  }

  @media only screen and (max-width: 470px) {
    top: 20.3vh;
    left: 49.5vw;

    &:hover {
      top: 20.3vh;
      left: 49.5vw;
    }
  }
  @media only screen and (max-width: 411px) and (max-height: 823px) {
    top: 19.7vh;
    left: 50vw;

    &:hover {
      top: 19.7vh;
      left: 50vw;
    }
  }
  @media only screen and (max-width: 411px) and (max-height: 731px) {
    top: 20.4vh;
    left: 50vw;

    &:hover {
      top: 20.4vh;
      left: 50vw;
    }
  }

  @media only screen and (max-width: 400px) {
    top: 19.9vh;
    left: 50.5vw;

    &:hover {
      top: 19.9vh;
      left: 50.5vw;
    }
  }

  @media only screen and (max-width: 400px) and (max-height: 667px) {
    top: 21.2vh;
    left: 50.5vw;

    &:hover {
      top: 21.2vh;
      left: 50.5vw;
    }
  }
  @media only screen and (max-width: 360px) and (max-height: 640px) {
    top: 21.6vh;
    left: 50.5vw;

    &:hover {
      top: 21.6vh;
      left: 50.5vw;
    }
  }

  @media only screen and (max-width: 350px) {
    top: 22.7vh;
    left: 51vw;

    &:hover {
      top: 22.7vh;
      left: 51vw;
    }
  }
  @media only screen and (max-width: 300px) {
    font-size: 1.8vw;
    top: 21.8vh;
    left: 54vw;

    &:hover {
      top: 21.8vh;
      left: 54vw;
    }
  }
`;
