import { ICardCategorieData } from '../../types/index';
import { Box, Image, HStack, Text, VStack, GridItem } from '@chakra-ui/react';
import { useCallback } from 'react';
export const useRenderPropsCardCategorieItems = () => {
  const handlerRenderCardCategorieItems = useCallback(
    (cardCategorieItem: ICardCategorieData, index: number) => {
      const { name, image, desc } = cardCategorieItem;
      return (
        <GridItem
          key={`card-categorie-item-${index}`}
          borderRadius='8px'
          w='100%'
          boxShadow='0 0 4px green'
        >
          <HStack flexDirection={{ base: 'column' }}>
            <Image
              py={'2'}
              boxSize='180px'
              objectFit='cover'
              src={image}
              alt={name}
              borderRadius='full'
            />
            <VStack alignItems={'flex-start'} py={'4'} px={'2'} w='80%'>
              <Text as='b'>{name}</Text>
              <Text>{desc}</Text>
            </VStack>
          </HStack>
        </GridItem>
      );
    },
    []
  );
  return [handlerRenderCardCategorieItems];
};
