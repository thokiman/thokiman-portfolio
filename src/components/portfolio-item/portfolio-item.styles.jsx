import styled, { css } from "styled-components";

const SideBarActive = css`
  display: none;
`;
const getSideBarActive = (props) => {
  if (props.$issidebarhidden) return SideBarActive;
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
  box-shadow: 0 2px 2px 0 rgba(18, 129, 148, 0.2),
    0 3px 15px 0 rgba(18, 129, 148, 0.1);

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
  "PortfolioImageCollectionsContainer";
PortfolioImageCollection.displayName = "PortfolioImageCollection";
PortfolioImageItem.displayName = "PortfolioImageItem";
