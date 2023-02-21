import {
  HStack,
  VStack,
  Text,
  Button,
  Center,
  Image,
  Stack,
} from '@chakra-ui/react';
import style from './style.module.css';
import Link from 'next/link';
const CustomCatalogueSection = () => {
  return (
    <Stack flexDirection={{ base: 'column-reverse', lg: 'row' }}>
      <VStack
        width={{ base: '100%', lg: '50%' }}
        height={{ base: '560px', md: '380px', lg: '500px' }}
        alignItems='flex-start'
        px={{ base: 0, md: 4 }}
      >
        <Text fontWeight={600} fontSize={'2.5rem'}>
          Catálogo
        </Text>
        <Text fontWeight={700} fontSize={'2.5rem'}>
          ECOSECURITY CONSULTING
        </Text>
        <Text color={'green.500'} fontSize={'1.5rem'}>
          Hacemos tu empresa mejor que otras
        </Text>
        <Text color={'gray.400'} fontSize={'1.5rem'}>
          Venta y alquiler de articulos de seguridad industrial
        </Text>
        <Text color={'gray.400'} fontSize={'1.5rem'} mb={8}>
          Homologados con altos estandares de calidad
        </Text>
        <HStack pt={{ base: '20px', lg: '80px' }}>
          <Link
            href='https://drive.google.com/file/d/1iAZmwzB7-iLq26ffoSsaYurNCUCxRnYn/view?usp=share_link'
            target='_blanck'
          >
            <Text
              bg='green.500'
              px={{ base: 8, lg: 32 }}
              py={3}
              rounded='lg'
              fontWeight='bold'
              color='white'
            >
              Descargar catálogo
            </Text>
          </Link>
        </HStack>
      </VStack>
      <Image
        display={{ base: 'none', lg: 'block' }}
        w={{ lg: '50%' }}
        height={{ lg: '480px' }}
        rounded='lg'
        src='https://cuadernosdeseguridad.com/wp-content/uploads/2021/08/Tecnologia-movil-cuerpos-de-bomberos.jpg'
        alt='Calidad de Ecosecurity Consultin'
      />
    </Stack>
  );
};

export default CustomCatalogueSection;
