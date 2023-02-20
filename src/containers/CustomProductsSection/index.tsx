import CustomCardProduct from '../../components/CustomCardProduct/index';
import { cardProductItems } from './config';
import { useRenderPropsCardProductItems } from './hooks';

function CustomProductsSection(categorie: string) {
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
  auditiveProtectors: function () {
    return CustomProductsSection('auditive-protectors');
  },
  stretchers: function () {
    return CustomProductsSection('stretchers');
  },
  shoes: function () {
    return CustomProductsSection('shoes');
  },
  others: function () {
    return CustomProductsSection('others');
  },
};
