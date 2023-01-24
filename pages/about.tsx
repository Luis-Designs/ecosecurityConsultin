import DefaultLayout from '../src/views/DefaultLayout';
import { Stack, Text, HStack, Image, VStack, Box } from '@chakra-ui/react';
import { CustomGoalAboutSection } from '../src/containers/CustomGoalAboutSection/index';
const About = () => {
  return (
    <DefaultLayout>
      <Stack as='main' gap={16} py={8} px={8}>
        <CustomGoalAboutSection />
      </Stack>
    </DefaultLayout>
  );
};

export default About;
