import styled, { keyframes } from "styled-components";
const greenColor = "#128194";
const grayColor = "#3f4249";
const creamColor = "#bccfd5";

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

export const MapContainer = styled.div`
  width: 98%;
  height: 75%;
  margin: 0 auto;
  position: relative;
  top: 4px;
  .mapboxgl-popup-content {
    height: 16vh;
    width: 25vh;
    box-shadow: 3px 3px 2px ${greenColor};
    font-family: futura-book;
    font-size: 15px;
    line-height: 1.4em;
    background-color: ${grayColor};
    opacity: 0.9;
    letter-spacing: 0.15em;
    color: ${creamColor};
    animation: ${mapPopupContent} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      both;
  }

  .mapboxgl-popup-close-button {
    color: ${creamColor};
    position: relative;
    left: 146px;
    top: -100px;
  }

  .mapboxgl-popup-anchor-top .mapboxgl-popup-tip,
  .mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip,
  .mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {
    border-bottom-color: ${grayColor};
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 50vh;
  }
`;
MapContainer.displayName = "MapContainer";
