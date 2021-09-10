import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const blueColor = '#19dcea';
const purpleColor = '#b22cff';
const redColor = '#ea2222';
const yellowColor = '#f5be10';
const greenColor = '#3bd80d';

export const ServiceUrlIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px 20px;
  width: 100%;
  justify-content: center;
`;

const serviceUrlIconContainer = keyframes`
                 0% {
                     background: ${blueColor};
                     opacity: 0.6;
                 }

                 25% {
                     background: ${purpleColor};
                     opacity: 0.8;
                 }

                 50% {
                     background: ${redColor};
                     opacity: 0.7;
                 }

                 75% {
                     background:${yellowColor} ;
                     opacity: 0.9;
                 }

                 100% {
                     background: ${greenColor};
                     opacity: 1;
                 }
`;
export const ServiceUrlIconContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  cursor: pointer;
  &:hover {
    animation: ${serviceUrlIconContainer} 8s linear infinite alternate both;
  }
`;

export const ServiceUrlIconItem = styled.img`
  width: 80%;
  height: 80%;
`;
ServiceUrlIcon.displayName = 'ServiceUrlIcon';
ServiceUrlIconContainer.displayName = 'ServiceUrlIconContainer';
ServiceUrlIconItem.displayName = 'ServiceUrlIconItem';
