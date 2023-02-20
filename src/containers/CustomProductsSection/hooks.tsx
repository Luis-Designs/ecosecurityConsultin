import { ICardProductData } from '../../types/index';
import { Image, HStack, Text, VStack, GridItem } from '@chakra-ui/react';
import { useCallback } from 'react';
export const useRenderPropsCardProductItems = () => {
  const handlerRenderCardProductItems = useCallback(
    (cardProductItem: ICardProductData, index: number) => {
      const { name, image, desc } = cardProductItem;
      return (
        <GridItem
          key={`card-product-item-${index}`}
          borderRadius='8px'
          w='100%'
          boxShadow='0 0 4px green'
        >
          <HStack h='180px'>
            <Image
              boxSize='180px'
              objectFit='cover'
              src={image}
              alt={name}
              borderRadius='full'
            />
            <VStack alignItems={'flex-start'} px={'2.5'}>
              <Text as='b'>{name}</Text>
              <Text>{desc}</Text>
            </VStack>
          </HStack>
        </GridItem>
      );
    },
    []
  );
  return [handlerRenderCardProductItems];
};
