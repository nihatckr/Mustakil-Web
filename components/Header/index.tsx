import { Box, Flex, Link, HStack, Text, VStack } from '@chakra-ui/react';

import React, { useState } from 'react';

import { motion } from 'framer-motion';

import { MustakilLogo } from './Logo';

import MenuToggle from './MenuToggle';
import MenuItems from './MenuItems';
import { Icon, SearchIcon } from '@chakra-ui/icons';
import MobileMenu from './MobileMenu';
import { socials } from '../data/menu';

const variants = {
  open: {
    x: 60,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    x: -260,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [display, setDisplay] = useState('none');
  const [variant, setVariant] = useState('menuTitleDesktop');
  const [toggleColor, setToggleColor] = useState('gray.900');

  const handleHamburgerMenu = () => {
    console.log('click');
    setDisplay('flex');
    setOpen(!isOpen);
    if (!isOpen === true) {
      setToggleColor('gray.100');
      setVariant('menuTitleMobile');
    } else if (isOpen === true) {
      setToggleColor('gray.900');
      setVariant('menuTitleDesktop');
    }
  };

  return (
    <Flex
      as={motion.nav}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      minH={16}
      display={'flex'}
      width={'full'}
      position={'sticky'}
      top={0}
      zIndex={1}
    >
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        w={'full'}
        zIndex={2}
        alignItems={'center'}
      >
        <MustakilLogo zIndex={-1} />
        <Flex
          as={'ul'}
          alignItems={'center'}
          listStyleType={'none'}
          textAlign='center'
          marginRight={-4}
          display={{ base: 'none', md: 'flex' }}
        >
          <MenuItems isOpen={isOpen} variant={variant} />
        </Flex>
        <MenuToggle
          handleHamburgerMenu={handleHamburgerMenu}
          isOpen={isOpen}
          toggleColor={toggleColor}
        />
        {isOpen ? (
          <MobileMenu
            setDisplay={display}
            handleHamburgerMenu={handleHamburgerMenu}
            isOpen={isOpen}
          />
        ) : (
          ''
        )}
      </Box>
    </Flex>
  );
};
