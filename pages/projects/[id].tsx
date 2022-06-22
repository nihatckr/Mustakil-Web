import React from 'react';
import { Image } from '@chakra-ui/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Projects() {
  const {
    query: { id, title },
  } = useRouter();

  return (
    <>
      <motion.img src={`/images/${id}.jpg`} width={'300px'} />
    </>
  );
}
