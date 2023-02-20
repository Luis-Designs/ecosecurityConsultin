import DefaultLayout from '../src/views/DefaultLayout';
import { CustomGoalAboutSection } from '../src/containers/CustomGoalAboutSection/index';
import CustomServicesSection from '../src/containers/CustomServicesSection/index';
const About = () => {
  return (
    <DefaultLayout>
      <CustomGoalAboutSection />
      <CustomServicesSection />
    </DefaultLayout>
  );
};
export default About;
