import { Accordion, Text } from '@chakra-ui/react';

interface CustomCardServiceProps {
  cardServiceItems: JSX.Element | JSX.Element[];
}

const CustomCardService = ({ cardServiceItems }: CustomCardServiceProps) => {
  return (
    <>
      <Text fontSize='2xl' textAlign={'center'} mt={8}>
        Nuestros servicios
      </Text>
      <Accordion defaultIndex={[0]}>
        {cardServiceItems}
      </Accordion>
    </>
  );
};

export default CustomCardService;
