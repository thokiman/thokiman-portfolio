import styled, { css } from "styled-components";
const SideBarActive = css`
  display: none;
`;
const getSideBarActive = (props) => {
  if (props.$issidebarhidden) return SideBarActive;
  return null;
};
export const HomepageProfileTextContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    background-color: #3f4249;
    ${getSideBarActive}
  }
`;

export const HomepageBackgroundProfileText = styled.div`
  width: 100%;
  height: 75%;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomepageNameText = styled.div`
  text-align: center;
  font-kerning: auto;
  font-family: angilla;
  letter-spacing: 0.005em;
  font-size: 800%;
  width: fit-content;
  height: fit-content;
  word-spacing: -30px;
  padding-right: 10px;
  margin-bottom: 20px;
  @media only screen and (max-width: 800px) {
    padding-top: 40px;
    font-size: 17vw;
    word-spacing: -18px;
    text-align: center;
  }
`;
const HomepageTextStyles = css`
  color: #9096ae;
  font-family: baskerville-old-face;
  font-kerning: auto;
  padding-right: 10px;
`;
export const HomepageActivityText = styled.div`
  ${HomepageTextStyles}
  font-size: 200%;
  letter-spacing: 0.1em;
  line-height: 1.1em;
  width: 100%;
  height: fit-content;
  margin-bottom: 10px;
  text-align: center;
  @media only screen and (max-width: 800px) {
    text-align: left;
    width: 80%;
    font-size: 7vw;
    letter-spacing: 0.05em;
  }
`;

export const HomepageQuoteText = styled.div`
  ${HomepageTextStyles}
  font-size: 140%;
  letter-spacing: 0.1em;
  line-height: 1.15em;
  width: 90%;
  height: fit-content;
  text-align: right;
  @media only screen and (max-width: 800px) {
    text-align: right;
    width: 80%;
    font-size: 4.5vw;
    letter-spacing: 0.05em;
  }
`;
HomepageProfileTextContainer.displayName = "HomepageProfileTextContainer";
HomepageBackgroundProfileText.displayName = "HomepageBackgroundProfileText";
HomepageNameText.displayName = "HomepageNameText";
HomepageActivityText.displayName = "HomepageActivityText";
HomepageQuoteText.displayName = "HomepageQuoteText";
