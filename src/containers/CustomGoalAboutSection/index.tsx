import { HStack, VStack, Box, Text, Image } from '@chakra-ui/react';
import { goalItemsSection } from './config';
import { memo } from 'react';
export const CustomGoalAboutSection = () => {
  return (
    <HStack w='100%' flexDirection={{ base: 'column', lg: 'row' }}>
      <VStack px={{ lg: 6 }}>
        {goalItemsSection.map((goalItem, index) => (
          <Box key={`goal-item-about-section-${index}`} mb={4}>
            <Text fontWeight='bold' fontSize='2xl' mb={2}>
              {goalItem.title}
            </Text>
            <Text>{goalItem.desc}</Text>
            {goalItem.desc2 !== '' ? <Text mt={2}>{goalItem.desc2}</Text> : ''}
          </Box>
        ))}
      </VStack>
      <Image
        display={{ base: 'none', lg: 'block' }}
        src='https://rentadesonidoeiluminacion.com.mx/wp-content/uploads/2021/08/venta-de-extintores.jpg'
        alt='Ecosecurity Consultin'
        boxSize='420px'
      />
    </HStack>
  );
};
