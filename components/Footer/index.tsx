import { ArrowForwardIcon, Icon, Search2Icon } from '@chakra-ui/icons';
import {
  Flex,
  VStack,
  HStack,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Box,
  Link,
  Wrap,
  Divider,
  WrapItem,
  Stack,
  SimpleGrid,
  AspectRatio,
  Button,
  Center,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import { footerData } from '../data/projects';

import { socials } from '../data/menu';
import Image from '../Image';
import { motion } from 'framer-motion';

const Footer = ({ posts }: any) => {
  console.log(posts);
  return (
    <VStack width={'full'}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={0}>
        <VStack h='full' display={'flex'} mb={10}>
          <Flex
            width={'full'}
            justifyContent={{
              base: 'center',
              md: 'flex-start',
              lg: 'flex-start',
            }}
          >
            <Text variant={'footerTitle'} marginBottom={4}>
              İletişim
            </Text>
          </Flex>
          <Flex
            display={'flex'}
            width={'full'}
            justifyContent={{
              base: 'center',
              md: 'flex-start',
              lg: 'flex-start',
            }}
          >
            <AspectRatio ratio={1} w={'120px'}>
              <Image
                src='/svg/mustakil-logo.svg'
                alt='Mustakil Logo'
                w={1}
                h={1}
                layout={'fill'}
              />
            </AspectRatio>
          </Flex>
          <Flex
            display={'flex'}
            width={'full'}
            justifyContent={{
              base: 'center',
              md: 'flex-start',
              lg: 'flex-start',
            }}
          >
            <Text variant={'footerText'} mb={1}>
              Mustakil İç Mimarlık Tasarım
            </Text>
          </Flex>
          <Flex
            display={'flex'}
            width={'full'}
            justifyContent={{
              base: 'center',
              md: 'flex-start',
              lg: 'flex-start',
            }}
          >
            <Box>
              <Text variant={'footerText'}>Fenerbahçe Mah.</Text>
              <Text variant={'footerText'}> İğrip Sok. No:13 D:1 </Text>
            </Box>
            <Box ml={4}>
              <Text variant={'footerText'}> 34726</Text>
              <Text variant={'footerText'}>İstanbul / Kadıköy</Text>
            </Box>
          </Flex>
        </VStack>
        <VStack h='full' width={'full'} display={'flex'} mb={10}>
          <Flex
            width={'full'}
            justifyContent={{
              base: 'center',
              md: 'flex-start',
              lg: 'flex-start',
            }}
          >
            <Text variant={'footerTitle'} marginBottom={4}>
              Güncel Projeler
            </Text>
          </Flex>
          <Flex width={'full'}>
            <SimpleGrid
              columns={{ base: 1, md: 1 }}
              spacing={{ base: 0, md: 1 }}
              width={'full'}
              height={'full'}
            >
              {footerData.map((item) => {
                const { id, category, date, title, img } = item;
                return (
                  <NextLink href={`/projects/${img}`} key={id}>
                    <Flex
                      as={motion.div}
                      whileHover={{
                        scale: 0.98,
                        opacity: 0.7,
                      }}
                      cursor={'pointer'}
                      display='flex'
                      flexDir={{ base: 'column', md: 'row', lg: 'row' }}
                    >
                      <AspectRatio
                        ratio={1}
                        w={{ base: 500, md: 20, lg: 24 }}
                        h={{ base: 500, md: 20, lg: 24 }}
                      >
                        <Image
                          src={`/images/${img}.jpg`}
                          alt={title}
                          w={20}
                          layout={'fill'}
                        />
                      </AspectRatio>
                      <Box ml={1} display='flex' flexDir={'column'}>
                        <Text variant={'footerText'}>{title}</Text>
                        <Text variant={'footerText'}>{date}</Text>
                      </Box>
                    </Flex>
                  </NextLink>
                );
              })}
            </SimpleGrid>
          </Flex>
        </VStack>
        <VStack h='full' width={'full'} display={'flex'} mb={10}>
          <Flex
            width={'full'}
            justifyContent={{
              base: 'center',
              md: 'flex-start',
              lg: 'flex-start',
            }}
          >
            <Text variant={'footerTitle'} marginBottom={4}>
              Instagram
            </Text>
          </Flex>
          <Flex width={'full'}>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 1, md: 1 }}
            >
              {footerData.map((instagram) => {
                const { id, category, date, title, img } = instagram;
                return (
                  <Flex key={id}>
                    <AspectRatio ratio={1} w={{ base: 500, md: 200, lg: 200 }}>
                      <Box
                        as={motion.div}
                        whileHover={{
                          scale: 0.98,
                          opacity: 0.7,
                          textShadow: '0px,0px ,8px white',
                          boxShadow: '0px 5px 8px #0BC5EA',
                        }}
                        whileTap={{
                          scale: 0.8,
                          x: 2,
                        }}
                        display={'flex'}
                        zIndex={0}
                        cursor={'pointer'}
                      >
                        <Image
                          src={`/images/${img}.jpg`}
                          alt={title}
                          layout={'fill'}
                          objectFit='cover'
                        />
                        <Box
                          bottom={'0'}
                          right={'0'}
                          top={'0'}
                          left={'0'}
                          position={'absolute'}
                        />
                        <Text
                          position={'absolute'}
                          textColor={'gray.100'}
                          fontWeight={'bold'}
                          fontSize={'sm'}
                        >
                          {title}
                        </Text>
                      </Box>
                    </AspectRatio>
                  </Flex>
                );
              })}
            </SimpleGrid>
          </Flex>
        </VStack>
        <VStack h='full' width={'full'} display={'flex'} mb={10}>
          <Flex
            width={'full'}
            justifyContent={{
              base: 'center',
              md: 'flex-start',
              lg: 'flex-start',
            }}
          >
            <Text variant={'footerTitle'} marginBottom={4} ml={1}>
              Arama
            </Text>
          </Flex>
          <InputGroup width={'98%'}>
            <InputLeftElement
              pointerEvents='none'
              color='gray.300'
              fontSize='0.865em'
              children={<Search2Icon color='gray.300' />}
            />
            <Input
              as={motion.input}
              placeholder='Arama...'
              fontSize='0.865em'
              borderRadius={20}
            />
            <InputRightElement
              fontSize='1.465em'
              children={<ArrowForwardIcon color='green.500' />}
            />
          </InputGroup>
        </VStack>
      </SimpleGrid>
      <Divider orientation='horizontal' />
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacing={0}
        width={'full'}
        alignItems={'center'}
      >
        <Flex
          justifyContent={{
            base: 'center',
            md: 'flex-start',
            lg: 'flex-start',
          }}
          mb={2}
        >
          <Text
            textAlign='center'
            fontSize='smaller'
            _dark={{
              color: 'white',
            }}
          >
            &copy;Copyright. All rights reserved.
          </Text>
        </Flex>
        <Flex
          justifyContent={{
            base: 'center',
            md: 'flex-end',
            lg: 'flex-end',
          }}
          mb={2}
        >
          {socials.map((social) => {
            const { id, icon, href } = social;
            return (
              <Link
                key={id}
                as={motion.a}
                whileHover={{
                  opacity: 0.3,
                }}
              >
                <Icon
                  color='gray.800'
                  _dark={{
                    color: 'white',
                  }}
                  ml={'1rem'}
                  h='20px'
                  w='20px'
                  as={icon}
                />
              </Link>
            );
          })}
        </Flex>
      </SimpleGrid>
    </VStack>
  );
};

export default Footer;
