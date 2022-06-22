import type { NextPage } from 'next';
import { Heading, Image, Link } from '@chakra-ui/react';
import Layout from '../../components/Layout';

import { items } from '../../components/data';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

const Projects: NextPage = () => {
  return (
    <Layout>
      {items.map((item) => {
        const { id, category, backgroundColor, pointOfInterest, title } = item;
        return (
          <>
            <div>{category}</div>
            <Link href={`/projects/${id}`}>
              <motion.img
                layoutId={id}
                animate={{ scale: 1 }}
                whileHover={{
                  position: 'relative',
                  zIndex: 1,
                  background: 'white',
                  scale: 1.1,

                  transition: {
                    duration: 0.2,
                  },
                }}
                src={`/images/${id}.jpg`}
                width={'300px'}
              />
            </Link>
          </>
        );
      })}
      <Heading> Projects</Heading>
    </Layout>
  );
};

export default Projects;
