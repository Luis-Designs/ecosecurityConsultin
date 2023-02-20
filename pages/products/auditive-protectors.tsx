import DefaultLayout from '../../src/views/DefaultLayout';
import { Text } from '@chakra-ui/react';
import { typeCategorie } from '../../src/containers/CustomProductsSection/index';
const Helmets = () => {
  return (
    <DefaultLayout>
      <Text fontSize='2xl' textAlign={'center'}>
        Nuestros Productos :: Protectores auditivos
      </Text>
      {typeCategorie.auditiveProtectors()}
    </DefaultLayout>
  );
};
export default Helmets;
