import { Flex, Button, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

import React from 'react'
import farmer from '../public/farmer.jpeg'



const Hero = ({ handleClick }: any) => {

  return (
    <Flex width="100vw" height="100vh">
      <Box
        flex='1'
        px={10}
        overflow="hidden"
        position="relative"
        bgColor="green"


      >
        <Image
          src="/bg-image.png"
          width={200}
          height={300}
          alt={''}
          style={{
            opacity: '8%',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          }}
        />

        <Box
          borderRadius="0px 0px 100px 100px"
          border="7px solid #F8C80F"
          bg="white"
          w="106px"
          h="110px"
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Image src='/uda-logo.png' width={77} height={77} alt='logo' />
        </Box>

        <Box  mt='12vw'>
          <Text
            color='white'
            fontSize={{base: '10.2vw', md: '4.2vw'}}
            fontWeight={700}
            lineHeight='normal'
          >
            UDA Grassroots Elections <span style={{ color: '#F8C80F' }} >2023</span> Results
          </Text>
        </Box>

        <Box mt={50}>
          <Button
            color='black'
            borderRadius='100px'
            bgColor='#F8C80F'
            fontSize={{lg: '1.2vw'}}
            p={{md: '1.2vw 1.2vw'}}
            onClick={handleClick}
          >
            View all Results
          </Button>
        </Box>
      </Box>
      <Box display={{base: 'none', lg: 'block'}}>
        <Image
          src={farmer}
          alt='Farmer'

          style={{
            width: '100%',
            height: '100%',
          }} />
      </Box>

    </Flex>
  )
}

export default Hero