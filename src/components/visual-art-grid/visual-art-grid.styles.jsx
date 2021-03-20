import styled from "styled-components";

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
  color: #e3e1e4;
`;

export const VisualArtGridContent = styled.div`
  padding: 7px;
  display: grid;
  grid-gap: 3px;
  grid-auto-columns: minmax(150px, auto);
  grid-auto-rows: minmax(150px, auto);
`;

export const VisualArtGridItem = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:nth-child(5n) {
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
    grid-column-start: 2;
    grid-column-end: 4;
  }
`;

export const VisualArtImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
`;
VisualArtGridContainer.displayName = "VisualArtGridContainer";
VisualArtTitle.displayName = "VisualArtTitle";
VisualArtGridContent.displayName = "VisualArtGridContent";
VisualArtGridItem.displayName = "VisualArtGridItem";
VisualArtImage.displayName = "VisualArtImage";
