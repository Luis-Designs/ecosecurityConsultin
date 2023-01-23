import DefaultLayout from '../src/views/DefaultLayout';
import { Stack } from '@chakra-ui/react';
import { HeaderSection } from '../src/containers/HeaderSection/index';
import CustomProductsSection from '../src/containers/CustomProductsSection/index';

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Stack as="main" gap={16} pb={8} px={8}>
          <HeaderSection />
          {/* <CustomProductsSection /> */}
          {/* <LogosSection />
          <FunctionsSection />
          <TematicsSection />
          <PowerBISection /> */}
        </Stack>
      </DefaultLayout>
    </>
  );
}
