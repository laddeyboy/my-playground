import styled, { keyframes } from 'styled-components';

const drawerOpen = keyframes`
  0% { width: 0px },
  25% { width: 125px },
  50% { width: 250px },
  75% { width: 375px },
  100% { width: 500px },
`;

export const DrawerContainer = styled.div`
  height: 100vh;
  background-color: darkgray;
  position: absolute;
  top: 0;
  right: 0;
  animation-name: drawerOpen;
  animation-duration: 2s;
`;

export const DrawerHeader = styled.div`
  height: 50px;
  width: 100%;
  border: .5px solid gray;
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