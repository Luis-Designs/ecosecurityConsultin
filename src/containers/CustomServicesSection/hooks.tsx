import { ICardServiceData } from '../../types/index';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Image,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';
import { useCallback } from 'react';

export const useRenderPropsCardServiceItems = () => {
  const handlerRenderCardServiceItems = useCallback(
    (cardServiceItem: ICardServiceData, index: number) => {
      const { name, image, desc } = cardServiceItem;
      return (
        <AccordionItem key={`card-product-item-${index}`} w='100%'>
          <h2>
            <AccordionButton _expanded={{ bg: 'green.600', color: 'white' }}>
              <Box
                as='span'
                flex='1'
                textAlign='left'
                fontWeight='bold'
                fontSize={{ base: '18px', md: '20px' }}
                paddingLeft={2}
              >
                {name.toUpperCase()}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <HStack
              h={{ base: '420px', md: '320px', lg: '380px' }}
              justifyContent='center'
            >
              <Image
                display={{ base: 'none', lg: 'block' }}
                w='50%'
                boxSize='300px'
                objectFit='cover'
                src={image}
                alt={name}
                borderRadius='full'
              />
              <VStack
                w={{ lg: '50%' }}
                py={{ base: 0, md: 4 }}
                alignItems={'flex-start'}
                px={4}
              >
                <Text fontSize={{ base: '16px', md: '18px' }}>{desc}</Text>
              </VStack>
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      );
    },
    []
  );
  return [handlerRenderCardServiceItems];
};
