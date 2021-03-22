import styled from "styled-components";

export const TechnologyGridContainer = styled.div`
  position: relative;
  top: 10px;
  margin: 20px auto;
  padding: 0 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 800px) {
    top: 0;
  }
`;

export const TechnologyTitle = styled.div`
  text-align: left;
  font-family: baskerville-old-face;
  font-size: 3vw;
  margin: auto 0;
  font-kerning: auto;
  letter-spacing: 0.01em;
  color: #e3e1e4;
  width: 15%;
  @media only screen and (max-width: 800px) {
    font-size: 25px;
  }
`;

export const TechnologyGridContent = styled.div`
  position: relative;
  left: 140px;
  bottom: 10px;
  display: grid;
  gap: 10px 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  justify-content: center;
  align-items: center;
  width: 30vw;
  @media only screen and (max-width: 800px) {
    justify-content: flex-end;
    left: 175px;
  }
`;

export const TechnologyGridItem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const TechnologyImage = styled.img`
  width: 80%;
  height: 100%;
  @media only screen and (max-width: 800px) {
    width: 55px;
    height: 55px;
  }
`;
TechnologyGridContainer.displayName = "TechnologyGridContainer";
TechnologyTitle.displayName = "TechnologyTitle";
TechnologyGridContent.displayName = "TechnologyGridContent";
TechnologyGridItem.displayName = "TechnologyGridItem";
TechnologyImage.displayName = "TechnologyImage";
