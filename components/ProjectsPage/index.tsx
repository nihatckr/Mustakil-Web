import { Box, HStack, Wrap, WrapItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { items } from '../data'
import ProjectCard from './ProjectCard'


const ProjectsPage = () => {
    return (
        <HStack width={'full'} display={'flex'}>

            <Flex as={motion.ul} initial={{ borderRadius: 25 }} >
                <Box as={motion.li} layout initial={{ borderRadius: 10 }} >
                    {items.map(({ id, img }) => {
                        return <ProjectCard key={id} img={img} />
                    })}
                </Box>
            </Flex>
        </HStack>
    )
}

export default ProjectsPage

