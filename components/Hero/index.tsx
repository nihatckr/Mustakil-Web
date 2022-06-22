import { Flex, HStack, AspectRatio, SimpleGrid, Box } from '@chakra-ui/react';
import React from 'react';
import Image from '../Image';
import { ImageSlider } from '../ImageSlider';

const Hero = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2 }}
      spacing={0}
      w={'full'}
      height={'full'}
    >
      <Box
        width={'full'}
        display={'flex'}
        flexDir={{ base: 'row', md: 'column', lg: 'row' }}
      >
        <ImageSlider />
      </Box>
      <Box width={'full'} display={'flex'}>
        asdas
      </Box>
    </SimpleGrid>
  );
};

export default Hero;
