import CustomCardService from '../../components/CustomCardService/index';
import { cardServiceItems } from './config';
import { useRenderPropsCardServiceItems } from './hooks';

const CustomServicesSection = () => {
  const [handlerRenderCardServiceItems] = useRenderPropsCardServiceItems();

  return (
    <CustomCardService
      cardServiceItems={cardServiceItems.map(handlerRenderCardServiceItems)}
    />
  );
};

export default CustomServicesSection;
