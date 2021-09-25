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

export const PortfolioImageCollectionsContainer = styled.div`
  width: 100%;
  padding: 5px;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: minmax(300px, auto) minmax(300px, auto) minmax(
      300px,
      auto
    );
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
export const PortfolioImageCollection = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 2px 0 ${boxShadowPortfolioImageCollectionColorOne},
    0 3px 15px 0 ${boxShadowPortfolioImageCollectionColorTwo};

  &:nth-child(1) {
    grid-column: 1 / 4;
    grid-row-end: span 2;
  }
  &:nth-child(2n) {
    grid-column: 1 / 3;
    grid-row-end: span 3;
  }
  &:nth-child(3n) {
    grid-column: 2 / 4;
    grid-row-end: span 2;
  }
  &:nth-child(4n) {
    grid-column: 1 / 2;
    grid-row-end: span 3;
  }
  &:nth-child(5n) {
    grid-column: 3 / 4;
    grid-row-end: span 3;
  }
  &:nth-child(6n) {
    grid-column: 1 / 3;
    grid-row-end: span 2;
  }
  &:nth-child(7n) {
    grid-column: 2 / 4;
    grid-row-end: span 3;
  }
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

export const PortfolioImageItem = styled.img`
  object-fit: cover;
  object-position: 28% 50%;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    object-position: 35% 50%;
  }
`;
PortfolioImageCollectionsContainer.displayName =
  'PortfolioImageCollectionsContainer';
PortfolioImageCollection.displayName = 'PortfolioImageCollection';
PortfolioImageItem.displayName = 'PortfolioImageItem';
