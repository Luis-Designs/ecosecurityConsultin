import { HStack, VStack, Box, Text, Image } from '@chakra-ui/react';
import { goalItemsSection } from './config';
export const CustomGoalAboutSection = () => {
  return (
    <HStack w='100%' border='1px solid red'>
      <VStack px={6}>
        {goalItemsSection.map((goalItem, index) => (
          <Box key={`goal-item-about-section-${index}`} mb={4}>
            <Text fontWeight='bold' fontSize='2xl' mb={2}>
              {goalItem.title}
            </Text>
            <Text>{goalItem.desc}</Text>
          </Box>
        ))}
      </VStack>
      <Image
        src='https://rentadesonidoeiluminacion.com.mx/wp-content/uploads/2021/08/venta-de-extintores.jpg'
        alt='Ecosecurity Consultin'
        boxSize='420px 1px'
      />
    </HStack>
  );
};
