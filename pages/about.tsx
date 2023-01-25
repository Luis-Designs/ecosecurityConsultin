import DefaultLayout from '../src/views/DefaultLayout';
import { Stack, Text, HStack, Image, VStack, Box } from '@chakra-ui/react';
import { CustomGoalAboutSection } from '../src/containers/CustomGoalAboutSection/index';
const About = () => {
  return (
    <DefaultLayout>
      <CustomGoalAboutSection />
    </DefaultLayout>
  );
};
export default About;
