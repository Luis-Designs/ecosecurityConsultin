import { Box, Center, Flex, HStack, Stack, VStack } from '@chakra-ui/react';
import { menuItems } from './config';
import { useRenderPropsMenuItems } from '../../hooks';

import ModeSwitcher from '../../components/ModeSwitcher';
import Logo from '../../atoms/Logo';
import style from './style.module.css';
import CustomMenu from '../../components/CustomMenu';

const CustomNavBar = () => {
  const [handlerRenderMenuItems, handlerRenderMobileMenuItems] =
    useRenderPropsMenuItems();

  return (
    <HStack className={style.menu} as='nav' backgroundColor='Background'>
      <Box>
        <Logo />
      </Box>
      <HStack display={{ base: 'none', md: 'flex' }}>
        {menuItems.map(handlerRenderMenuItems)}
        <ModeSwitcher />
      </HStack>
      <HStack display={{ base: 'flex', md: 'none' }}>
        <ModeSwitcher />
        <CustomMenu menuItems={menuItems.map(handlerRenderMobileMenuItems)} />
      </HStack>
    </HStack>
  );
};
export default CustomNavBar;
