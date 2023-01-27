import { VStack, Box, HStack, Grid } from '@chakra-ui/react';

interface CustomCardCategorieProps {
  cardCategorieItems: JSX.Element | JSX.Element[];
}

const CustomCardCategorie = ({ cardCategorieItems }: CustomCardCategorieProps) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(2, 1fr)',
      }}
      py={4}
      px={{base: 0, lg: 24}}
      gap={6}
      width='100%'
    >
      {cardCategorieItems}
    </Grid>
  );
};

export default CustomCardCategorie;
