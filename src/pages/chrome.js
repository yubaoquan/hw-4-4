import {
  Box,
  Flex,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdMic } from 'react-icons/io';
import Seo from '@/components/seo.js';

import SiteBtns from '@/components/site-btns';

const ChromePage = () => {
  const url = 'https://www.google.com/search?q=Pedro+Linares+L%C3%B3pez&oi=ddle&ct=144867176&hl=zh-CN&kgmid=%2Fm%2F08g16c&source=doodle-ntp&ved=0ahUKEwjbzMHpv7zxAhXYrJ4KHVNGBQgQPQgB';

  const inputHeight = '44px';
  const myGray = '#969696';
  const sites = [{
    icon: '1',
    title: '2',
    url: '3',
  }, {
    icon: '11',
    title: '22',
    url: '33',
  }];

  return (
    <>
      <Seo title="New Tab" />
      <Box textAlign="center" pt="64px" bgColor="#025A6C" h="100vh">
        <Box>
          <Link href={url} isExternal>
            <Box
              bgColor="rgba(94, 102, 104, 1)"
              py="16px"
              px="24px"
              display="inline-block"
              borderRadius="20px"
            >
              <StaticImage
                src="../images/dragon.png"
                width={510}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="big dragon"
              />
            </Box>
          </Link>
        </Box>

        <Flex mt="38px" mb="16px" justify="center">
          <InputGroup w="560px" borderRadius="22px">
            <InputLeftElement h={inputHeight} w="52px" pointerEvents="none">
              <Icon as={AiOutlineSearch} color={myGray} />
            </InputLeftElement>

            <Input
              w="560px"
              h={inputHeight}
              borderRadius="22px"
              pl="52px"
              border="0"
              {...{
                _focusVisible: {
                  outline: 'none',
                },
              }}
              placeholder="Search Google or type a URL"
            />

            <InputRightElement h={inputHeight} w="44px" cursor="pointer">
              <Icon as={IoMdMic} color="skyblue" />
            </InputRightElement>
          </InputGroup>
        </Flex>

        <SiteBtns items={sites} />
      </Box>
    </>
  );
};

export default ChromePage;
