import { Flex, HStack, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import React from 'react';

import MenuItems from '../MenuItems';

const variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    y: -1000,
    opacity: 0,
  },
};

const MobileMenu = ({ display }) => {
  return (
    <HStack
      as={motion.div}
      initial='hidden'
      animate='visible'
      display={display}
      variants={variants}
      position={'fixed'}
      width={'100vw'}
      height={'100vh'}
      top={'0'}
      left={'0'}
      zIndex={-1}
    >
      <VStack height={'full'} bgColor={'cyan.400'} justifyContent='center'>
        <Flex as={'ul'} flexDir={'column'}>
          <MenuItems />
        </Flex>
      </VStack>
    </HStack>
  );
};

export default MobileMenu;
