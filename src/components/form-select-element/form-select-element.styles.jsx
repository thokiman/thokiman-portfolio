import styled, { css, keyframes } from "styled-components";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const subColor = "#128194";
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

export const FormSelectValue = styled.div`
  position: relative;
  right: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 35px;
  color: ${mainColor};
  cursor: pointer;
`;

export const FormSelectValueActive = styled.div`
  font-size: 30px;
  text-align: center;
  width: 90%;
  color: ${subColor};
  padding: 5px;
  animation: ${formSelectActive} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  border-bottom: ${subColor} solid 1px;
`;

const FormSelectValueHoverStyles = css`
  color: ${mainColor};
  transition: color linear 0.2s;
`;

export const FormSelectTitle = styled.div`
  font-size: 35px;
  text-align: start;
  width: 90%;
  color: ${subColor};
  position: relative;
  right: -1.5vw;
  padding: 5px;
  padding-bottom: 15px;
  border-bottom: ${subColor} solid 1px;
  ${FormSelectValue}:hover & {
    ${FormSelectValueHoverStyles}
  }
`;

const formSelectButtonActive = keyframes`
                    from {
                        transform: rotate(0deg)
                    }

                    to {
                        transform: rotate(-90deg);
                    }

`;

const formSelectButtonHide = keyframes`
                    from {
                        transform: rotate(-90deg)
                    }

                    to {
                        transform: rotate(0deg);
                    }

`;
const FormSelectArrowButtonActive = css`
  animation: ${formSelectButtonActive} linear 0.4s;
  transform: rotate(-90deg);
`;
const getFormSelectArrowButtonActive = (props) => {
  if (props.$istypeclick) return FormSelectArrowButtonActive;
};
export const FormSelectArrowButton = styled.span`
  position: relative;
  left: 10px;
  display: flex;
  align-items: center;
  width: 35px;
  color: ${subColor};
  animation: ${formSelectButtonHide} linear 0.4s;
  ${getFormSelectArrowButtonActive}
  ${FormSelectValue}:hover & {
    ${FormSelectValueHoverStyles}
  }
`;

export const FormInputCheckerContainer = styled.span`
  position: absolute;
  left: -1vw;
  color: ${subColor};
`;
const FormInputTelCheckerIconStyles = css`
  width: 2vw;
  height: 2vh;
`;
export const FormInputCheckerIconTrue = styled(FaCheckCircle)`
  ${FormInputTelCheckerIconStyles}
`;
export const FormInputCheckerIconFalse = styled(FaTimesCircle)`
  ${FormInputTelCheckerIconStyles}
`;
FormSelectValue.displayName = "FormSelectValue";
FormSelectValueActive.displayName = "FormSelectValueActive";
FormSelectTitle.displayName = "FormSelectTitle";
FormSelectArrowButton.displayName = "FormSelectArrowButton";
FormInputCheckerContainer.displayName = "FormInputCheckerContainer";
FormInputCheckerIconTrue.displayName = "FormInputCheckerIconTrue";
FormInputCheckerIconFalse.displayName = "FormInputCheckerIconFalse";
