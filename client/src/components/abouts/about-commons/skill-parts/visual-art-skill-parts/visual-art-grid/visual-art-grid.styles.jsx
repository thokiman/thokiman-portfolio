import styled from 'styled-components';

const whiteSmokeColor = '#e3e1e4';
const maxWidthSmartphone = 800;
export const VisualArtGridContainer = styled.div`
  position: relative;
  top: -35px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VisualArtTitle = styled.div`
  position: relative;
  top: 7px;
  margin: 7px auto;
  text-align: center;
  line-height: 1.5em;
  font-size: 500%;
  font-kerning: auto;
  letter-spacing: 0.02em;
  color: ${whiteSmokeColor};
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 400%;
  }
  @media only screen and (max-width: 400px) {
    font-size: 300%;
  }
  @media only screen and (max-width: 300px) {
    font-size: 200%;
  }
`;

export const VisualArtGridContent = styled.div`
  padding: 7px;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: minmax(150px, auto) minmax(150px, auto) minmax(
      150px,
      auto
    );
  grid-auto-rows: minmax(150px, auto) minmax(150px, auto) minmax(150px, auto);
  grid-auto-flow: row dense;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    grid-auto-columns: minmax(115px, auto);
    grid-auto-rows: minmax(115px, auto);
  }
`;

export const VisualArtGridItem = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  &:nth-child(2) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
  }
  &:nth-child(3) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  &:nth-child(4) {
    grid-column: 1/2;
    grid-row: 3/4;
  }
  &:nth-child(5) {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
  }
  &:nth-child(6) {
    grid-column: 3 / 4;
    grid-row: 3 / 4;
  }
  @media only screen and (max-width: 800px) {
    &:nth-child(1) {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }
    &:nth-child(2) {
      grid-column: 3 / 4;
      grid-row: 1 / 3;
    }
    &:nth-child(3) {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    &:nth-child(4) {
      grid-column: 1/2;
      grid-row: 3/4;
    }
    &:nth-child(5) {
      grid-column: 2 / 3;
      grid-row: 2 / 4;
    }
    &:nth-child(6) {
      grid-column: 3 / 4;
      grid-row: 3 / 4;
    }
  }
`;

export const VisualArtImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 30% 50%;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    object-position: center 30%;
  }
`;
VisualArtGridContainer.displayName = 'VisualArtGridContainer';
VisualArtTitle.displayName = 'VisualArtTitle';
VisualArtGridContent.displayName = 'VisualArtGridContent';
VisualArtGridItem.displayName = 'VisualArtGridItem';
VisualArtImage.displayName = 'VisualArtImage';
