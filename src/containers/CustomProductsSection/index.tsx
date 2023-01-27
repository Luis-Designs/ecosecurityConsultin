import { Stack, Text, HStack } from '@chakra-ui/react';
import CustomCardProduct from '../../components/CustomCardProduct/index';
import { cardProductItems } from './config';
import { useRenderPropsCardProductItems } from './hooks';

function CustomProductsSection(categorie: string) {
  console.log(categorie);

  const [handlerRenderCardProductItems] = useRenderPropsCardProductItems();
  return (
    <CustomCardProduct
      cardProductItems={cardProductItems
        .filter((cardProductItem) => cardProductItem.categorie === categorie)
        .map(handlerRenderCardProductItems)}
    />
  );
}

export const typeCategorie = {
  gloves: function () {
    return CustomProductsSection('gloves');
  },
  helmets: function () {
    return CustomProductsSection('helmets');
  },
};
