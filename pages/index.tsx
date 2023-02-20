import DefaultLayout from '../src/views/DefaultLayout';
import { HeaderSection } from '../src/containers/HeaderSection/index';
import CustomCategoriesSection from '../src/containers/CustomCategoriesSection/index';

export default function Home() {
  return (
    <DefaultLayout>
      <HeaderSection />
      <CustomCategoriesSection />
    </DefaultLayout>
  );
}
