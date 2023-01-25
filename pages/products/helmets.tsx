import DefaultLayout from '../../src/views/DefaultLayout';
import { Box, Text } from '@chakra-ui/react';
import { typeCategorie } from '../../src/containers/CustomProductsSection/index';
const Helmets = () => {
  return (
    <DefaultLayout>
      <Text fontSize='2xl' textAlign={'center'}>
        Nuestros Productos :: Cascos
      </Text>
      {typeCategorie.helmets()}
    </DefaultLayout>
  );
};
export default Helmets;
