import { DrawerContainer, DrawerHeader, CloseDrawer, CloseIcon } from './styles';

const Drawer = ({closeDrawer}) => {
  const test = true;
  return (
    <DrawerContainer>
      <DrawerHeader>
        <CloseDrawer>
          <CloseIcon onClick={closeDrawer}>+</CloseIcon>
        </CloseDrawer>
      </DrawerHeader>
    </DrawerContainer>
  )
};

export default Drawer;