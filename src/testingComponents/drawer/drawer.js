import {
  DrawerContainer,
  DrawerContent,
  DrawerHeader,
  CloseDrawer,
  CloseIcon,
} from "./styles";

const Drawer = ({ closeDrawer, isDrawerOpen }) => {
  return (
    <DrawerContainer isDrawerOpen={isDrawerOpen}>
      <DrawerHeader>
        <CloseDrawer>
          <CloseIcon onClick={closeDrawer}>+</CloseIcon>
        </CloseDrawer>
      </DrawerHeader>
    </DrawerContainer>
  );
};

export default Drawer;
