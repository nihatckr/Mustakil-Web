import type { NextPage } from 'next';
import { Flex, Heading, Image, Link } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import ProjectsPage from '../../components/ProjectsPage';
import { items } from '../../components/data';

const Projects: NextPage = () => {
  return (
    <Layout>
      <AnimateSharedLayout>
        <Flex as={motion.ul} layout initial={{ borderRadius: 25 }}>
          {items.map(item =>
            <ProjectsPage key={item} />)}
        </Flex>
      </AnimateSharedLayout>
    </Layout>
  );
};

export default Projects;
