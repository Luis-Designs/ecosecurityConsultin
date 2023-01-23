import { Image, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

const Logo = () => {
  const colorLogo = useColorModeValue('none', 'brightness(0) invert(1)')

  return (
    <Link href={'/'}>
      <Image
        filter={colorLogo}
        boxSize={150}
        objectFit='cover'
        height='50%'
        alt="logo observatorio"
        src="https://drive.google.com/uc?export=view&id=1_k2pc2Jt2-Po_UGTf3WadW2JrHpODNm5" />
    </Link>
  )
}

export default Logo