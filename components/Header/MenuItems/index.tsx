import { Box, Link, Text } from '@chakra-ui/react';

import { menus } from '../../data/menu';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MenuItems = ({ ...props }) => {
  const router = useRouter();

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <>
      {menus.map((menu) => {
        return (
          <NextLink key={menu.id} href={menu.href}>
            <Link
              margin={'0 1rem'}
              cursor={'pointer'}
              color={router.pathname == menu.href ? ' gray.600' : ' '}
              _hover={{
                color: 'gray.400',
                opacity: '0.8',
                transition: '500ms all ease-in-out',
              }}
              position={'relative'}
              mb={{ base: '100px', md: 'px' }}
            >
              <Text
                textAlign={'center'}
                variant={props.variant}
                color={{ base: 'gray.100', md: 'gray.900' }}
              >
                {menu.label.toUpperCase()}
              </Text>

              {router.pathname == menu.href ? (
                <Box
                  as={motion.div}
                  initial='hidden'
                  animate='visible'
                  variants={variants}
                  layoutId='underline'
                  position={'absolute'}
                  bottom={'-5px'}
                  width={'full'}
                  height={'2px'}
                  bgColor={'cyan.400'}
                />
              ) : (
                ''
              )}
            </Link>
          </NextLink>
        );
      })}
    </>
  );
};

export default MenuItems;
