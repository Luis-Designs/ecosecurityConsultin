import DefaultLayout from '../src/views/DefaultLayout';
import { Stack } from '@chakra-ui/react';
import { HeaderSection } from '../src/containers/HeaderSection/index';
import CustomProductsSection from '../src/containers/CustomProductsSection/index';

export default function Home() {
  return (
    <DefaultLayout>
      <HeaderSection />
      <CustomProductsSection />
    </DefaultLayout>
  );
}
