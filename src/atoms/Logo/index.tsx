import { Image, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

const Logo = () => {
  const colorLogo = useColorModeValue('none', 'brightness(0) invert(1)');

  return (
    <Link href={'/'}>
      <Image
        filter={colorLogo}
        boxSize={120}
        objectFit='cover'
        height='50%'
        alt='logo eco security consulting'
        src='https://res.cloudinary.com/dokwefr5i/image/upload/v1676911627/Eco%20Security%20Consulting/verde_x7uz6h.png'
      />
    </Link>
  );
};

export default Logo;
