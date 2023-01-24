import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { settings, slides } from './config';
import { HStack } from '@chakra-ui/react';

export const HeaderSection = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  return (
    <Box position={'relative'} height={'400px'} width={'full'} color='white'>
      {/* CSS files for react-slick */}
      <link
        rel='stylesheet'
        type='text/css'
        charSet='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      {/* Left Icon */}
      <IconButton
        aria-label='left-arrow'
        borderRadius={'50%'}
        variant='ghost'
        position='absolute'
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiChevronLeft size='40px' />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label='right-arrow'
        borderRadius={'50%'}
        variant='ghost'
        position='absolute'
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiChevronRight size='40px' />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            height={'400px'}
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            overflow='hidden'
            backgroundImage={`url(${slide.image})`}
          >
            <HStack
              height='100%'
              justifyContent={{ base: 'center', lg: 'flex-start' }}
              pl={{ base: 0, md: '10%' }}
            >
              <Stack spacing={6} maxW={{ lg: '480px' }}>
                <Heading fontSize={{ base: '3xl', md: '4xl' }}>
                  {slide.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }}>{slide.text}</Text>
              </Stack>
            </HStack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
