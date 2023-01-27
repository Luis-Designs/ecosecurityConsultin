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
        height='3rem'
        width='3em'
        icon={<HamburgerIcon height='2.5rem' width='2.5rem' />}
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
