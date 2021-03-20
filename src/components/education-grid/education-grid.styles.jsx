import styled from "styled-components";

export const EducationImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EducationImageItems = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 100%;
`;

export const EducationImage = styled.img`
  width: 100%;
  height: 70%;
  background-size: cover;
`;
EducationImageContainer.displayName = "EducationImageContainer";
EducationImageItems.displayName = "EducationImageItems";
EducationImage.displayName = "EducationImage";
