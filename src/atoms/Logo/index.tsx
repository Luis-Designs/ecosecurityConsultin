import { Image, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

const Logo = () => {
  const colorLogo = useColorModeValue('none', 'brightness(0) invert(1)')

  return (
    <Link href={'/'}>
      <Image
        filter={colorLogo}
        boxSize={120}
        objectFit='cover'
        height='50%'
        alt="logo observatorio"
        src="http://drive.google.com/uc?export=view&id=18enu7ShGT9irJ0Pw43nu0ykPvUSqvlC5" />
        
    </Link>
  )
}

export default Logo