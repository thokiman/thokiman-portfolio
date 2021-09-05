import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const ServiceUrlIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px 20px;
  width: 100%;
  justify-content: center;
`;

const serviceUrlIconContainer = keyframes`
                 0% {
                     background: #19dcea;
                     opacity: 0.6;
                 }

                 25% {
                     background: #b22cff;
                     opacity: 0.8;
                 }

                 50% {
                     background: #ea2222;
                     opacity: 0.7;
                 }

                 75% {
                     background: #f5be10;
                     opacity: 0.9;
                 }

                 100% {
                     background: #3bd80d;
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
ServiceUrlIcon.displayName = "ServiceUrlIcon";
ServiceUrlIconContainer.displayName = "ServiceUrlIconContainer";
ServiceUrlIconItem.displayName = "ServiceUrlIconItem";
