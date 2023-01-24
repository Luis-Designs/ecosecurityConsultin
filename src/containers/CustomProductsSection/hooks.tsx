import { ICardProductData } from '../../types/index';
import { Box, Image, HStack, Text, VStack, GridItem } from '@chakra-ui/react';
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
              boxSize='100px'
              objectFit='cover'
              src={image}
              alt={name}
              borderRadius='full'
            />
            <VStack py={4} alignItems={'flex-start'}>
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
