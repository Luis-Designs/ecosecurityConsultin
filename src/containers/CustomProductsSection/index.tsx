import { Stack, Text, HStack } from '@chakra-ui/react';
import CustomCardProduct from '../../components/CustomCardProduct/index';
import { cardProductItems } from './config';
import { useRenderPropsCardProductItems } from './hooks';

function CustomProductsSection() {
  const [handlerRenderCardProductItems] = useRenderPropsCardProductItems();
  return (
    <Stack>
      <Text fontSize='2xl' textAlign={'center'}>
        Nuestros productos
      </Text>
      <CustomCardProduct
        cardProductItems={cardProductItems.map(handlerRenderCardProductItems)}
      />
    </Stack>
  );
}

export default CustomProductsSection;
