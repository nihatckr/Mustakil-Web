import type { NextPage } from 'next';
import { AspectRatio, Box, Flex, Grid, Heading, Image, Link, VStack, Wrap } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { items } from '../../components/data';
import { useState } from 'react';


const Projects: NextPage = () => {
  return (
    <Layout>
      <AnimateSharedLayout>
        <VStack width={'full'}>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={1}
            as={motion.ul}
            layout initial={{ borderRadius: 25 }}

          >
            {items.map((item) => <ProjectItem item={item} />)
            }
          </Grid>
        </VStack>
      </AnimateSharedLayout>
    </Layout>
  );
};

export default Projects;


function ProjectItem({ item }) {

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return <>

    <Box
      key={item.id}
      as={motion.li}
      layout onClick={toggleOpen} initial={{ borderRadius: 10 }}

    >
      <AspectRatio
        ratio={1}
        w={340}
      >
        <Image
          as={motion.img}
          layout

          onClick={toggleOpen}
          src={`/images/${item.img}.jpg`}
          alt={item}
        />
      </AspectRatio>
      <AnimatePresence>
        {isOpen && <ProjectInformation
          key={item.id}
          item={item}
        />}
      </AnimatePresence>
    </Box>

  </>
}

function ProjectInformation({ item }) {

  return <Flex
    key={item.id}
    as={motion.div}
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {item.category}
  </Flex>
}