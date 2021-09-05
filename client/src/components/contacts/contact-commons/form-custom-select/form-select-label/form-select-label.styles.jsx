import styled, { css, keyframes } from "styled-components";
const mainColor = "#bccfd5";

const formSelectActive = keyframes`
            0% {
                transform: translateZ(-20px) translateY(20px) translateX(-20px);
                opacity: 0;
            }

            100% {
                transform: translateZ(0) translateY(0) translateX(0);
                opacity: 1;
            }

`;
export const FormSelectTitleActive = styled.div`
  text-align: start;
  width: 100%;
  font-size: 30px;
  color: ${mainColor};
  margin-bottom: 5px;
  animation: ${formSelectActive} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const FormSelectTitleContainerActive = css`
  height: 39px;
`;

const getFormSelectTitleContainerActive = (props) => {
  if (!!props.value) return FormSelectTitleContainerActive;
};
export const FormSelectTitleContainer = styled.div`
  display: block;
  height: 0px;
  transition: height 0.5s ease-in-out;
  ${getFormSelectTitleContainerActive}
`;
FormSelectTitleActive.displayName = "FormSelectTitleActive";
FormSelectTitleContainer.displayName = "FormSelectTitleContainer";