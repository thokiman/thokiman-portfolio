import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const lightBlueColor = '#74c6d4';
const maxWidthSmartphone = 800;

export const AboutHeaderSkillContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 10%;
  width: 60vw;
  padding: 15px;
  margin-bottom: 10px;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100%;
    height: 40px;
  }
`;

const AboutTextBoxStyles = css`
  text-decoration: none;
  padding: 5px;
  margin: 0 5px;
  color: ${lightBlueColor};
  font-family: futura-book;
  font-size: 20px;
  letter-spacing: 0.03em;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 20px;
  }
`;
const AboutTextBoxActive = css`
  ${AboutTextBoxStyles}
  cursor: default;
  transition: all 0.7s linear;
  box-shadow: ${lightBlueColor} 0px 20px 21px -9px;
`;
const aboutTextBoxHover = keyframes`
    from{
      opacity:0
    }
    to{
      opacity:1
    }
`;
const AboutTextBoxHide = css`
  ${AboutTextBoxStyles}
  transition: all 0.7s linear;
   &:hover {
    
           transition: all 0.7s linear;
            box-shadow: ${lightBlueColor} 0px 20px 21px -9px;
            animation: ${aboutTextBoxHover} 0.5s ease-in-out both;
            
`;

const getAboutTextBox = ({ $matchpath }) => {
  if ($matchpath) {
    return AboutTextBoxActive;
  }
  return AboutTextBoxHide;
};

export const AboutTextBox = styled(Link)`
  ${getAboutTextBox}
`;

AboutHeaderSkillContainer.displayName = 'AboutHeaderSkillContainer';
AboutTextBox.displayName = 'AboutTextBox';
