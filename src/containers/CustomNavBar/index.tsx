import {
  Box,
  Center,
  Flex,
  HStack,
  Stack,
  VStack,
  Text,
  Link,
} from '@chakra-ui/react';
import { menuItems } from './config';
import { useRenderPropsMenuItems } from '../../hooks';

import ModeSwitcher from '../../components/ModeSwitcher';
import Logo from '../../atoms/Logo';
import style from './style.module.css';
import CustomMenu from '../../components/CustomMenu';

import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const CustomNavBar = () => {
  const [handlerRenderMenuItems, handlerRenderMobileMenuItems] =
    useRenderPropsMenuItems();

  return (
    <>
      <HStack
        bg='green.500'
        color='white'
        justifyContent={{ base: 'center', md: 'space-between' }}
        py={2}
      >
        <HStack px={8}>
          <FaPhone />
          <Text>949570005</Text>
          <FaWhatsapp fontSize='22px' />
          <Link href='https://api.whatsapp.com/send?phone=51964200304' target='_blank'>964200304</Link>
        </HStack>
        <HStack px={8} display={{ base: 'none', md: 'flex' }}>
          <FaEnvelope fontSize='20px' />
          <Text>ecosecurit.consulting@gmail.com</Text>
        </HStack>
      </HStack>
      <HStack
        className={style.menu}
        as='nav'
        backgroundColor='Background'
        height={{ base: '64px', md: '80px' }}
      >
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
    </>
  );
};
export default CustomNavBar;
