import { Stack, Box, HStack, VStack, Text } from '@chakra-ui/react';
import Logo from '../../atoms/Logo/index';
import style from './style.module.css';
import { menuItems } from '../CustomNavBar/config';
import { useRenderPropsMenuItems } from '../../hooks/index';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const socialIcons = [
  {
    name: <FaFacebook fontSize='30px' />,
    href: 'https://www.facebook.com/profile.php?id=100087957067728',
  },
  {
    name: <FaWhatsapp fontSize='30px' />,
    href: 'https://api.whatsapp.com/send?phone=51964200304',
  },
];

const CustomFooter = () => {
  const [handlerRenderMenuItems] = useRenderPropsMenuItems();
  return (
    <>
      <Stack as='footer' padding='2rem' gap='1rem' bg='#1D1D1B'>
        <HStack justifyContent={'space-between'}>
          <Box filter={'brightness(0) invert(1)'}>
            <Logo />
          </Box>
          <HStack
            color='white'
            className={style.flexWrap}
            display={{ base: 'none', lg: 'flex' }}
          >
            {menuItems.map(handlerRenderMenuItems)}
          </HStack>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <VStack
            color='white'
            className={style.flexWrap}
            alignItems='flex-start'
          >
            <Text>Siguenos en nuestras redes sociales:</Text>
            <HStack>
              {socialIcons.map(({ name, href }, index) => (
                <Link key={`social-index${index}`} href={href} target='_blank'>
                  {name}
                </Link>
              ))}
            </HStack>
          </VStack>
          <VStack
            color='white'
            w='50%'
            alignItems={'end'}
            flexDirection={'column'}
          >
            <Text>
              Contactos: 949570005 / 964200304
            </Text>
            <Text width={{base: '100%', md: 'initial'}}>Email: ecosecurit.consulting@gmail.com</Text>
          </VStack>
        </HStack>
      </Stack>
      <HStack bg='Background'>
        <Text py={2} px={8}>
          Copyright © <b>www.ecosecurityconsultinsac.com</b> All Rights
          Reserved.
        </Text>
      </HStack>
    </>
  );
};

export default CustomFooter;
