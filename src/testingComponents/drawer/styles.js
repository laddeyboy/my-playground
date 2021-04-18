import styled, { css } from "styled-components/macro";

const body = document.querySelector("body");
const viewPortLessScroll = window.innerWidth - body.clientWidth;
console.log("viewPor", viewPortLessScroll);

export const DrawerContainer = styled.div`
  height: 100vh;
  width: 500px;
  position: absolute;
  left: 100vw;
  top: 0;
  right: 0;
  background-color: blue;
  transition-duration: 500ms;
  ${({ isDrawerOpen }) =>
    isDrawerOpen &&
    css`
      left: calc(100vw - ${500 + viewPortLessScroll}px);
    `}
`;

export const DrawerHeader = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 0.5px solid gray;
  display: flex;
  justify-content: flex-end;
`;

export const CloseDrawer = styled.div`
  width: 2rem;
`;

export const CloseIcon = styled.p`
  font-size: 2rem;
  transform: rotate(-45deg);
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
