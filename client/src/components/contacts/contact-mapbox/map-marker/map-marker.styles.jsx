import styled, { keyframes } from "styled-components";
import { ReactComponent as ThokimanNormalFace } from "../../../../assets/collections-icon/thokiman-icon/collections/normal-face-marker.svg";

const thokimanMarkerHover = keyframes`
 0%,
  100% {
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateY(-8px);
  }
  20%,
  40%,
  60% {
    transform: translateY(8px);
  }
  80% {
    transform: translateY(6.4px);
  }
  90% {
    transform: translateY(-6.4px);
  }
`;

export const Marker = styled(ThokimanNormalFace)`
  background-position: cover;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  cursor: pointer;
  &:hover {
    animation: ${ thokimanMarkerHover } 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      infinite both;
  }
`;
Marker.displayName = "Marker";
