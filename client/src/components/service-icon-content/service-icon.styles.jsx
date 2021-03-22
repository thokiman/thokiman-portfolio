import styled from "styled-components";

export const ServiceIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const ServiceIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const ServiceIconItem = styled.img`
  width: 80%;
  height: 80%;
`;

ServiceIcon.displayName = "ServiceIcon";
ServiceIconContainer.displayName = "ServiceIconContainer";
ServiceIconItem.displayName = "ServiceIconItem";
