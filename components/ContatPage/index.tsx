import { SimpleGrid, Box, Heading, Text, Flex, Divider, Center } from '@chakra-ui/react'
import React from 'react'
import { ImageSlider } from '../ImageSlider'
import Map from './Map'

const ContactPage = () => {
    return (
        <Flex width={'full'} display='flex' margin={'auto'} flexDir={'column'} position={'relative'}>

            <Box width={'full'} minH={'640px'} marginTop={'120px'} >
                <Map />
            </Box>
            <Flex width={'75%'} minH={'340px'} alignItems={'center'} textAlign={'center'}
                bgColor='white' mt={'-270px'}
                mx={'auto'} zIndex={1}
                flexDir={'column'}
                display={'flex'}
            >
                <Box mt={14}>
                    <Text as={'h1'} variant={'headingText'}>Müstakil</Text>
                    <Text variant={'contactSubtitle'} mb={2}>3865, Kadıköy, İstanbul, Türkiye</Text>
                    <Center mb={2}  >
                        <Divider orientation='horizontal' width={'200px'} />
                    </Center>
                    <Text variant={'contactTitle'}>Genel Bilgiler</Text>
                    <Text variant={'contactSubtitle'}>mail@mustakil.co</Text>

                </Box>
                <Box display={'flex'} width={'full'} mt={10}>
                    <Flex display={'flex'} flexDir={'column'} width={'full'}>
                        <Center mb={2} >
                            <Divider orientation='horizontal' width={'120px'} />
                        </Center>
                        <Text variant={'contactTitle'}>Proje</Text>
                        <Text variant={'contactSubtitle'}>proje@mustakil.co</Text>
                        <Text variant={'contactSubtitle'} color={'#0BC5EA'} fontWeight={'bold'}>+90 533 765 5527</Text>
                    </Flex>

                    <Flex display={'flex'} flexDir={'column'} width={'full'}>

                        <Center mb={2}  >
                            <Divider orientation='horizontal' width={'120px'} />
                        </Center>
                        <Text variant={'contactTitle'}>Sanal Gerçeklik (VR)</Text>
                        <Text variant={'contactSubtitle'}>vr@mustakil.co</Text>
                        <Text variant={'contactSubtitle'} color={'#0BC5EA'} fontWeight={'bold'}>+90 533 765 5527</Text>
                    </Flex>

                    <Flex display={'flex'} flexDir={'column'} width={'full'}>

                        <Center mb={2} >
                            <Divider orientation='horizontal' width={'120px'} />
                        </Center>
                        <Text variant={'contactTitle'}>Ürün Görselleştirme</Text>
                        <Text variant={'contactSubtitle'}>urun@mustakil.co</Text>
                        <Text variant={'contactSubtitle'} color={'#0BC5EA'} fontWeight={'bold'}>+90 533 765 5527</Text>
                    </Flex>
                </Box>
            </Flex>
        </Flex >
    )
}

export default ContactPage