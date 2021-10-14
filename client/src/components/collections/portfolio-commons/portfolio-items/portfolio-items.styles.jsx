import styled, { css } from 'styled-components';

const boxShadowPortfolioImageCollectionColorOne = 'rgba(18, 129, 148, 0.2)';
const boxShadowPortfolioImageCollectionColorTwo = 'rgba(18, 129, 148, 0.1)';
const maxWidthSmartphone = 800;

const PortfolioItemIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return PortfolioItemIsNotActivated;
  return null;
};

const selectPortfolioImageCollectionContainerStyles = ({ $matchpath }) => {
  if ($matchpath === 0) {
    return css`
      grid-template-columns:
        minmax(300px, 500px) minmax(300px, 500px) minmax(300px, 500px)
        minmax(300px, 500px) minmax(300px, 500px);
    `;
  } else if ($matchpath === 1) {
    return css`
      grid-template-columns:
        minmax(300px, auto) minmax(300px, auto) minmax(300px, auto)
        minmax(300px, auto);
    `;
  } else if ($matchpath === 2) {
    return css`
      grid-template-columns:
        minmax(300px, auto) minmax(300px, auto) minmax(300px, auto)
        minmax(300px, auto);
    `;
  } else if ($matchpath === 3) {
    return css`
      grid-template-columns: minmax(300px, auto) minmax(300px, auto) minmax(
          300px,
          auto
        );
    `;
  } else if ($matchpath === 4) {
    return css`
      grid-template-columns: minmax(300px, auto) minmax(300px, auto) minmax(
          300px,
          auto
        );
    `;
  }
};

export const PortfolioImageCollectionsContainer = styled.div`
  width: 100%;
  padding: 5px;
  display: grid;
  grid-gap: 8px;

  ${selectPortfolioImageCollectionContainerStyles}
  grid-auto-rows: minmax(300px, auto);
  grid-auto-flow: row dense;
  overflow: hidden;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    grid-template-columns:
      minmax(80px, auto) minmax(80px, auto)
      minmax(80px, auto);

    grid-auto-rows: minmax(115px, auto);
    ${getSideBarActive}
  }
`;

const selectPortfolioImageCollectionStyles = ({ $matchpath }) => {
  if ($matchpath === 0) {
    return css`
      width: 100%;
      height: 100%;
      &:nth-child(1) {
        grid-column: 1 / 2;
        grid-row-end: span 1;
      }
      &:nth-child(2n) {
        grid-column: 2 / 3;
        grid-row-end: span 1;
      }
      &:nth-child(3n) {
        grid-column: 3 / 4;
        grid-row-end: span 1;
      }
      &:nth-child(4n) {
        grid-column: 4 / 5;
        grid-row-end: span 1;
      }
      &:nth-child(5n) {
        grid-column: 5 / 6;
        grid-row-end: span 1;
      }
      &:nth-child(6n) {
        grid-column: 1 / 2;
        grid-row-end: span 1;
      }
      &:nth-child(7n) {
        grid-column: 2 / 3;
        grid-row-end: span 1;
      }
    `;
  } else if ($matchpath === 1) {
    return css`
      width: 100%;
      height: 100%;
      &:nth-child(1) {
        grid-column: 1 / 5;
        grid-row-end: span 1;
      }
      &:nth-child(2) {
        grid-column: 1 / 3;
        grid-row-end: span 1;
      }
      &:nth-child(3) {
        grid-column: 3 / 5;
        grid-row-end: span 1;
      }
      &:nth-child(4) {
        grid-column: 1 / 5;
        grid-row-end: span 1;
      }
      &:nth-child(5) {
        grid-column: 1 / 3;
        grid-row-end: span 1;
      }
      &:nth-child(6) {
        grid-column: 3 / 5;
        grid-row-end: span 1;
      }
      &:nth-child(7) {
        grid-column: 1 / 3;
        grid-row-end: span 1;
      }
    `;
  } else if ($matchpath === 2) {
    return css`
      width: 100%;
      height: 100%;
      &:nth-child(1) {
        grid-column: 1 / 3;
        grid-row-end: span 1;
      }
      &:nth-child(2) {
        grid-column: 3 / 5;
        grid-row-end: span 1;
      }
      &:nth-child(3) {
        grid-column: 1 / 5;
        grid-row-end: span 1;
      }
      &:nth-child(4) {
        grid-column: 1 / 3;
        grid-row-end: span 1;
      }
      &:nth-child(5) {
        grid-column: 3 / 5;
        grid-row-end: span 1;
      }
      &:nth-child(6) {
        grid-column: 1 / 5;
        grid-row-end: span 1;
      }
      &:nth-child(7) {
        grid-column: 1 / 3;
        grid-row-end: span 1;
      }
      &:nth-child(8) {
        grid-column: 3 / 5;
        grid-row-end: span 1;
      }
      &:nth-child(9) {
        grid-column: 1 / 3;
        grid-row-end: span 1;
      }
      &:nth-child(10) {
        grid-column: 3 / 5;
        grid-row-end: span 1;
      }
    `;
  } else if ($matchpath === 3) {
    return css`
      width: 100%;
      height: 100%;
      &:nth-child(1) {
        grid-column: 1 / 2;
        grid-row-end: span 1;
      }
      &:nth-child(2n) {
        grid-column: 2 / 4;
        grid-row-end: span 1;
      }
      &:nth-child(3n) {
        grid-column: 1 / 3;
        grid-row-end: span 2;
      }
      &:nth-child(4n) {
        grid-column: 3 / 4;
        grid-row-end: span 1;
      }
      &:nth-child(5n) {
        grid-column: 1 / 3;
        grid-row-end: span 2;
      }
      &:nth-child(6n) {
        grid-column: 2 / 4;
        grid-row-end: span 1;
      }
      &:nth-child(7n) {
        grid-column: 1 / 2;
        grid-row-end: span 1;
      }
    `;
  } else if ($matchpath === 4) {
    return css`
      width: 100%;
      height: 100%;
      &:nth-child(1) {
        grid-column: 1 / 2;
        grid-row-end: span 1;
      }
      &:nth-child(2n) {
        grid-column: 2 / 4;
        grid-row-end: span 1;
      }
      &:nth-child(3n) {
        grid-column: 1 / 3;
        grid-row-end: span 2;
      }
      &:nth-child(4n) {
        grid-column: 3 / 4;
        grid-row-end: span 1;
      }
      &:nth-child(5n) {
        grid-column: 1 / 3;
        grid-row-end: span 2;
      }
      &:nth-child(6n) {
        grid-column: 2 / 4;
        grid-row-end: span 1;
      }
      &:nth-child(7n) {
        grid-column: 1 / 2;
        grid-row-end: span 1;
      }
    `;
  }
};

export const PortfolioImageCollection = styled.div`
  box-shadow: 0 2px 2px 0 ${boxShadowPortfolioImageCollectionColorOne},
    0 3px 15px 0 ${boxShadowPortfolioImageCollectionColorTwo};
  transition: all 0.5s ease-in-out;
  ${selectPortfolioImageCollectionStyles}
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    grid-auto-flow: column dense;
    &:nth-child(1) {
      grid-column: 1/ 4;
      grid-row-end: span 2;
    }
    &:nth-child(2n) {
      grid-column: 1/ 3;
      grid-row-end: span 2;
    }

    &:nth-child(3n) {
      grid-column: 3/ 4;
      grid-row-end: span 2;
    }
    &:nth-child(4n) {
      grid-column: 1/ 2;
      grid-row-end: span 2;
    }
    &:nth-child(5n) {
      grid-column: 2/ 4;
      grid-row-end: span 2;
    }
    &:nth-child(6n) {
      grid-column: 1/ 4;
      grid-row-end: span 2;
    }
    &:nth-child(7n) {
      grid-column: 1/ 3;
      grid-row-end: span 2;
    }
    &:nth-child(8n) {
      grid-column: 3/ 4;
      grid-row-end: span 2;
    }
    &:nth-child(9n) {
      grid-column: 1/ 4;
      grid-row-end: span 2;
    }
  }
`;

const selectPortfolioImageItemStyles = ({ $matchpath }) => {
  if ($matchpath === 0) {
    return css`
      height: 100%;
      width: 100%;
      object-position: 50% 50%;
    `;
  } else if ($matchpath === 1) {
    return css`
      height: 100%;
      width: 100%;
      object-position: 45% 50%;
    `;
  } else if ($matchpath === 2) {
    return css`
      height: 100%;
      width: 100%;
      object-position: 50% 50%;
    `;
  } else if ($matchpath === 3) {
    return css`
      height: 100%;
      width: 100%;
      object-position: 28% 50%;
    `;
  } else if ($matchpath === 4) {
    return css`
      height: 100%;
      width: 100%;
      object-position: 28% 50%;
    `;
  }
};

export const PortfolioImageItem = styled.img`
  object-fit: cover;

  ${selectPortfolioImageItemStyles}
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    object-position: 60% 50%;
  }
  @media only screen and (max-width: 550px) {
    object-position: 50% 50%;
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    object-position: 65% 50%;
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
    object-position: 50% 50%;
  }
  @media only screen and (max-width: 470px) and (max-height: 731px) {
    object-position: 65% 50%;
  }
  @media only screen and (max-width: 350px) and (max-height: 568px) {
    object-position: 60% 50%;
  }

  @media only screen and (max-width: 300px) {
    object-position: 60% 50%;
  }
`;
PortfolioImageCollectionsContainer.displayName =
  'PortfolioImageCollectionsContainer';
PortfolioImageCollection.displayName = 'PortfolioImageCollection';
PortfolioImageItem.displayName = 'PortfolioImageItem';
