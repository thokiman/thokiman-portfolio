import styled from 'styled-components';

const maxWidthSmartphone = 800;

export const FormGroupSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 98%;
  margin: 15px 10px 40px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    margin: 30px 10px 40px;
  }
`;

FormGroupSelectContainer.displayName = 'FormGroupSelectContainer';
