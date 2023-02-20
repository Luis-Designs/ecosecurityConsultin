import DefaultLayout from '../../src/views/DefaultLayout';
import { Text } from '@chakra-ui/react';
import { typeCategorie } from '../../src/containers/CustomProductsSection/index';
const Gloves = () => {
  return (
    <DefaultLayout>
      <Text fontSize='2xl' textAlign={'center'}>
        Nuestros Productos :: Zapatos
      </Text>
      {typeCategorie.shoes()}
    </DefaultLayout>
  );
};

export default Gloves;
