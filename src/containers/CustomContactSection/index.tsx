import { Image, Box, Text, HStack } from '@chakra-ui/react';
import Map from '../CustomMapSection';

const CustomContactSection = () => {
  return (
    <HStack flexDirection={{ base: 'column', md: 'row' }} justifyContent={'center'}>
      <Map />
      <Box px={{ lg: 4 }} pt={{ base: 4, md: 0 }}>
        <Text fontSize={{ base: '18px', md: '20px' }}>
          <b>Oficina principal:</b> Calle. Ramón Castillo N.º 168 A.H. Villa
          Hermosa <br />
          LA LIBERTAD - CHEPEN.
        </Text>
        <Text fontSize={{ base: '18px', md: '20px' }}>
          <b>Email:</b> ecosecurit.consulting@gmail.com
        </Text>
        <Text fontSize={{ base: '18px', md: '20px' }}>
          <b>Télefono:</b> 949570005
        </Text>
      </Box>
    </HStack>
  );
};

export default CustomContactSection;
