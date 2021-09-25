import styled, { keyframes } from 'styled-components';
const greenBlueColor = '#128194';
const grayColor = '#3f4249';
const heavyLightBlueColor = '#bccfd5';
const maxWidthSmartphone = 800;

const mapPopupContent = keyframes`
        0% {
            transform: rotateX(-100deg);
            transform-origin: top;
            opacity: 0;
        }

        100% {
            transform: rotateX(0deg);
            transform-origin: top;
            opacity: 1;
        }

`;
// **

export const MapContainer = styled.div`
  width: 98%;
  height: 75%;
  margin: 0 auto;
  position: relative;
  top: 4px;
  .mapboxgl-popup-content {
    box-shadow: 3px 3px 2px ${greenBlueColor};
    font-family: futura-book;

    background-color: ${grayColor};
    opacity: 0.9;

    color: ${heavyLightBlueColor};
    animation: ${mapPopupContent} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      both;
  }

  .mapboxgl-popup-close-button {
    color: ${heavyLightBlueColor};
  }

  .mapboxgl-popup-anchor-top .mapboxgl-popup-tip,
  .mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip,
  .mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {
    border-bottom-color: ${grayColor};
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 100%;
    height: 40vh;
  }
`;
MapContainer.displayName = 'MapContainer';
