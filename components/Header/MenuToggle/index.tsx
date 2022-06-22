import { Box, Button, Flex, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const top = {
  closed: {
    rotate: 0,
    translateY: 0,
  },
  opened: {
    rotate: 45,
    translateY: 12,
  },
};
const center = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};
const bottom = {
  closed: {
    rotate: 0,
    translateY: 0,
  },
  opened: {
    rotate: -45,
    translateY: -12,
  },
};
const MenuToggle = ({ toggleColor, isOpen, handleHamburgerMenu }) => {
  return (
    <Button
      variant={'unstyled'}
      onClick={() => handleHamburgerMenu()}
      position={'relative'}
      display={{ base: 'flex', md: 'none' }}
      zIndex={1}
    >
      <VStack height={'full'} justifyContent='center'>
        <Line
          bgColor={toggleColor}
          initial='closed'
          animate={isOpen ? 'opened' : 'closed'}
          variants={top}
        />
        <Line
          initial='closed'
          animate={isOpen ? 'opened' : 'closed'}
          variants={center}
          bgColor={toggleColor}
        />
        <Line
          bgColor={toggleColor}
          initial='closed'
          animate={isOpen ? 'opened' : 'closed'}
          variants={bottom}
        />
      </VStack>
    </Button>
  );
};

export default MenuToggle;

const Line = ({ ...props }) => {
  return (
    <Box
      as={motion.span}
      display={'flex'}
      {...props}
      width={'32px'}
      height='3px'
      borderRadius={'2px'}
    />
  );
};
