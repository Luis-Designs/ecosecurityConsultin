import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react';

interface CustomMenuProps {
  menuItems: JSX.Element | JSX.Element[];
}

const CustomMenu = ({ menuItems }: CustomMenuProps) => {
  return (
    <Menu>
      <MenuButton
        display={{ base: 'block', md: 'none' }}
        height='4rem'
        width='4em'
        icon={<HamburgerIcon height='3rem' width='3rem' />}
        variant='outline'
        aria-label='Options'
        as={IconButton}
      />
      <MenuList display={{ md: 'none' }} width='80vw'>
        {menuItems}
      </MenuList>
    </Menu>
  );
};

export default CustomMenu;
