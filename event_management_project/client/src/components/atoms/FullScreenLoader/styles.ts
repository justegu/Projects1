import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledFullScreenLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;
export const Spinner = styled.div`
  animation: ${spinAnimation} 1s linear infinite;
  border-bottom: 2px solid lightgray;
  border-left: 2px solid grey;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
