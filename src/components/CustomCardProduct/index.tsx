import { Grid } from '@chakra-ui/react';

interface CustomCardProductProps {
  cardProductItems: JSX.Element | JSX.Element[];
}

const CustomCardProduct = ({ cardProductItems }: CustomCardProductProps) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      px={{base: 0, lg: 24}}
      gap={6}
      width='100%'
    >
      {cardProductItems}
    </Grid>
  );
};

export default CustomCardProduct;
