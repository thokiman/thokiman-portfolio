import styled from "styled-components";

export const AboutPersonalityContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  width: 100%;
  margin: 0 auto;
`;

export const AboutPersonalityTitle = styled.div`
  text-align: center;
  padding: 40px 10px;
  font-size: 250%;
  color: #e3e1e4;
`;

export const AboutPersonalityBox = styled.div`
  opacity: 0.6;
  width: 100%;
  transition: background-color 0.6s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutPersonalityTextBox = styled.div`
  padding: 0 5px;
  opacity: 1;
  text-align: center;
  font-size: 120%;
  transition: color 0.2s ease-in-out;
  font-kerning: auto;
  letter-spacing: 0.025em;
`;

AboutPersonalityContainer.displayName = "AboutPersonalityContainer";
AboutPersonalityTitle.displayName = "AboutPersonalityTitle";
AboutPersonalityBox.displayName = "AboutPersonalityBox";
AboutPersonalityTextBox.displayName = "AboutPersonalityTextBox";
