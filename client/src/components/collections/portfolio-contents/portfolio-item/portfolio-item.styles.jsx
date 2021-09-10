import styled, { css } from 'styled-components';

const boxShadowPortfolioImageCollectionColorOne = 'rgba(18, 129, 148, 0.2)';
const boxShadowPortfolioImageCollectionColorTwo = 'rgba(18, 129, 148, 0.1)';

const PortfolioItemIsNotActivated = css`
  display: none;
`;
const getSideBarActive = ({ $issidebaractive }) => {
  if ($issidebaractive) return PortfolioItemIsNotActivated;
  return null;
};

export const PortfolioImageCollectionsContainer = styled.div`
  width: 100%;
  padding: 5px;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  overflow: hidden;

  @media only screen and (max-width: 800px) {
    ${getSideBarActive}
  }
`;
export const PortfolioImageCollection = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 2px 0 ${boxShadowPortfolioImageCollectionColorOne},
    0 3px 15px 0 ${boxShadowPortfolioImageCollectionColorTwo};

  &:nth-child(5n) {
    grid-column-end: span 2;
  }
`;

export const PortfolioImageItem = styled.img`
  object-fit: cover;
  object-position: 23% 90%;
  height: 100%;
  width: 100%;
`;
PortfolioImageCollectionsContainer.displayName =
  'PortfolioImageCollectionsContainer';
PortfolioImageCollection.displayName = 'PortfolioImageCollection';
PortfolioImageItem.displayName = 'PortfolioImageItem';
