import { VStack, Box } from "@chakra-ui/react";

interface CustomCardProductProps {
  cardProductItems: JSX.Element | JSX.Element[];
}

const CustomCardProduct = ({ cardProductItems }: CustomCardProductProps) => {
  return (
    <VStack>
      <Box width="100%">{cardProductItems}</Box>
    </VStack>
  );
};

export default CustomCardProduct;
