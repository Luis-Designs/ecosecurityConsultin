import CustomNavBar from '../../containers/CustomNavBar';
import CustomFooter from '../../containers/CustomFooter';
import { memo, PropsWithChildren } from 'react';
import Head from 'next/head';
import { descriptionOrganization, organizationName } from '../../utils/constants';

const keywords = [
  'Consultorías'
]

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>{organizationName}</title>
        <meta name="description" content={descriptionOrganization} />
        <meta name="keywords" content={String(keywords)} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomNavBar />
      {children}
      <CustomFooter />
    </>
  )
}

export default memo(DefaultLayout)
