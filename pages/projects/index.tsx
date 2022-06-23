import type { NextPage } from 'next';
import { Box, Flex, Image, Link, Text, } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { items } from '../../components/data';
import { motion } from 'framer-motion';

const Projects: NextPage = () => {

  return (
    <Layout>
      <Box
        as={'section'}
        mt={10}
        sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
      >
        {items.map((item) => {
          const { id, subtitle, galleryID, height, width, largeURL, thumbnailURL, title, category } = item
          return (
            <SimpleGallery
              key={id}
              galleryID={galleryID}
              height={height}
              subtitle={subtitle}
              width={width} category={category} largeURL={largeURL} thumbnailURL={thumbnailURL} title={title} />
          )
        })}
      </Box>
    </Layout>
  );
};

export default Projects;

function SimpleGallery({ ...props }) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery" id={props.galleryID}>
      <Flex as={'article'} m={4}>
        <Flex as={motion.header}
          display={'flex'}
          flexDir={'column'}
          whileHover={{
            y: -6,
            transition: { duration: 0.4 },
          }}
        >
          <Flex as={'figure'} >
            <Link
              as={'a'}
              href={`/images/${props.thumbnailURL}.jpg`}
              data-pswp-width={props.width}
              data-pswp-height={props.height}
              key={props.galleryID + '-' + props.id}
              target="_blank"
              objectFit={'cover'}
              rel="noreferrer"
            >
              <Image src={`/images/${props.thumbnailURL}.jpg`}
                alt={props.title} />
            </Link>
          </Flex>
          <Text variant={'projectCardTitle'}>{props.title}</Text>
          <Text variant={'projectCardSubtitle'}>{props.subtitle}</Text>
        </Flex>
      </Flex>

    </div>
  );
}
