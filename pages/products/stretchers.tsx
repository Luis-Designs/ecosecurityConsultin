import DefaultLayout from '../../src/views/DefaultLayout';
import { Text } from '@chakra-ui/react';
import { typeCategorie } from '../../src/containers/CustomProductsSection/index';
const Gloves = () => {
  return (
    <DefaultLayout>
      <Text fontSize='2xl' textAlign={'center'}>
        Nuestros Productos :: Camillas
      </Text>
      {typeCategorie.stretchers()}
    </DefaultLayout>
  );
};

export default Gloves;
