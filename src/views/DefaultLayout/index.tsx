import CustomNavBar from '../../containers/CustomNavBar';
import CustomFooter from '../../containers/CustomFooter';
import { memo, PropsWithChildren } from 'react';
import Head from 'next/head';
import {
  descriptionOrganization,
  organizationName,
} from '../../utils/constants';
import { Stack } from '@chakra-ui/react';

const keywords = ['Consultorías'];

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>{organizationName}</title>
        <meta name='description' content={descriptionOrganization} />
        <meta name='keywords' content={String(keywords)} />
      </Head>
      <CustomNavBar />
      <Stack as='main' gap={8} py={8} px={8}>
        {children}
      </Stack>
      <CustomFooter />
    </>
  );
};

export default memo(DefaultLayout);
