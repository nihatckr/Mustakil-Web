import { Box, Flex, WrapItem, Image, AspectRatio } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'


const ProjectCard = ({ ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <Flex {...props} as={motion.div} onClick={toggleOpen} >
            <AspectRatio ratio={1} w={100}>
                <Image src={`/images/${props.img}.jpg`} />
            </AspectRatio>
            <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </Flex>
    )
}

function Content({ ...props }) {
    return (
        <Flex
            {...props}
            as={motion.div}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            width={'full'}
            height={'full'}
            display={'flex'}
            flexDir={'column'}
        >
            <Box width={'full'} height={'8px'} bgColor={'gray.400'} mt={2} borderRadius={2} />
            <Box width={'full'} height={'8px'} bgColor={'gray.400'} mt={2} borderRadius={2} />
            <Box width={'full'} height={'8px'} bgColor={'gray.400'} mt={2} borderRadius={2} />

        </Flex>
    );
}

export default ProjectCard
