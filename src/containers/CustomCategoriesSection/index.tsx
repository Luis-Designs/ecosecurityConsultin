import { Stack, Text, HStack } from '@chakra-ui/react';
import CustomCardProduct from '../../components/CustomCardProduct/index';
import { cardCategorieItems } from './config';
import CustomCardCategorie from '../../components/CustomCardCategorie/index';
import { useRenderPropsCardCategorieItems } from './hooks';

function CustomCategoriesSection() {
  const [handlerRenderCardCategorieItems] = useRenderPropsCardCategorieItems();
  return (
    <Stack>
      <Text fontSize='2xl' textAlign={'center'} mt={8}>
        Nuestros productos
      </Text>
      <CustomCardCategorie
        cardCategorieItems={cardCategorieItems.map(
          handlerRenderCardCategorieItems
        )}
      />
    </Stack>
  );
}

export default CustomCategoriesSection;
