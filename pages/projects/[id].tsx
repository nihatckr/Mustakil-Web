import React from 'react';
import { Image } from '@chakra-ui/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Projects() {
  const {
    query: { largeURL },
  } = useRouter();

  return (
    <>
      <motion.img src={`/images/${largeURL}.jpg`} width={'300px'} />
    </>
  );
}
