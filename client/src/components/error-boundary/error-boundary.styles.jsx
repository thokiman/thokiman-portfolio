import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
  margin-top: 20px;
  height: 64vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 800px) {
    width: 50%;
    height: 68vh;
    position: relative;
    left: 40vw;
  }
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 30vh;
  height: 30vh;
  @media only screen and (max-width: 800px) {
    width: 25vh;
    height: 25vh;
  }
`;

export const ErrorImageTitle = styled.div`
  font-size: 4.5vw;
  color: #74c6d4;
  margin: 10px 0;
  font-family: futura-bold;
  letter-spacing: 0.15em;
  text-align: center;
  width: 100%;
  @media only screen and (max-width: 800px) {
    text-align: left;
    font-size: 5vw;
    width: 80%;
  }
`;

export const ErrorImageDescription = styled.div`
  font-size: 1.8vw;
  color: #74c6d4;
  margin: 10px 0;
  line-height: 1.4em;
  font-family: futura-book;
  letter-spacing: 0.1em;
  text-align: center;
  width: 79%;
  @media only screen and (max-width: 800px) {
    font-size: 3.5vw;
    letter-spacing: 0.06em;
    text-align: left;
  }
`;
