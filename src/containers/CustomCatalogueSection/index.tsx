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
        height={{ base: '560px', md: '480px' }}
        alignItems='flex-start'
        px={{ base: 0, md: 4 }}
      >
        <Text fontWeight={600} fontSize={'2rem'}>
          Catálogo
        </Text>
        <Text fontWeight={800} fontSize={'2.5rem'}>
          ECOSECURITY CONSULTING
        </Text>
        <Text color={'gray.800'} fontSize={'1.5rem'}>
          Hacemos tu empresa mejor que otras
        </Text>
        <Text color={'gray.500'} fontSize={'1.5rem'}>
          Venta y alquiler de articulos de seguridad industrial
        </Text>
        <Text color={'gray.500'} fontSize={'1.5rem'} mb={8}>
          Homologados con altos estandares de calidad
        </Text>
        <HStack pt={{ base: '20px', lg: '80px' }}>
          <Link href='/'>
            <Text
              bg='green.500'
              px={{ base: 20, lg: 32 }}
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
        w={{ base: '100%', lg: '50%' }}
        height={{ base: '220px', md: '480px' }}
        rounded='lg'
        src='https://cuadernosdeseguridad.com/wp-content/uploads/2021/08/Tecnologia-movil-cuerpos-de-bomberos.jpg'
        alt='Calidad de Ecosecurity Consultin'
      />
    </Stack>
  );
};

export default CustomCatalogueSection;
