import {
  Box,
  Flex,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
  Icon,
} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdMic } from 'react-icons/io';
import Seo from '@/components/seo.js';
import { useState, useRef } from 'react';

import SiteBtns from '@/components/site-btns';
import ShortcutToast from '@/components/shortcut-toast';

const doodleBoxStyle = {
  bgColor: 'rgba(94, 102, 104, 1)',
  py: '16px',
  px: '24px',
  display: 'inline-block',
  borderRadius: '20px',
};

const inputHeight = '44px';

const mainInputStyle = {
  w: '560px',
  h: inputHeight,
  borderRadius: '22px',
  pl: '52px',
  border: '0',
  _focusVisible: {
    outline: 'none',
  },
  _placeholder: {
    fontSize: '16px',
    color: '#333333',
    opacity: 1,
  },
};

const initialShortcuts = [{
  icon: 'https://www.baidu.com/favicon.ico',
  title: '百度一下 你就知道',
  url: 'https://www.baidu.com/',
}];

const ChromePage = () => {
  const url = 'https://www.google.com/search?q=Pedro+Linares+L%C3%B3pez&oi=ddle&ct=144867176&hl=zh-CN&kgmid=%2Fm%2F08g16c&source=doodle-ntp&ved=0ahUKEwjbzMHpv7zxAhXYrJ4KHVNGBQgQPQgB';

  const [sites, setSites] = useState(initialShortcuts);

  const toast = useToast();
  const toastIdRef = useRef();
  const closeToast = () => {
    if (toastIdRef.current) toast.close(toastIdRef.current);
  };

  const onUndo = () => {
    setSites(sites);
    closeToast();
  };

  const onRestore = () => {
    setSites(initialShortcuts);
    closeToast();
  };

  const toastByType = (notifyType) => {
    closeToast();
    toastIdRef.current = toast({
      position: 'bottom-left',
      duration: 500000,
      render() {
        return (
          <ShortcutToast
            notifyType={notifyType}
            onUndo={onUndo}
            onRestore={onRestore}
          />
        );
      },
    });
  };

  const addSite = (site) => {
    setSites([...sites, site]);
    toastByType('add');
  };

  const editSite = (index, site) => {
    const newSites = [...sites];
    newSites[index] = site;
    setSites(newSites);
    toastByType('edit');
  };

  const deleteSite = (index) => {
    console.info(index);
    setSites(sites.filter((t, i) => i !== index));
    toastByType('remove');
  };

  return (
    <>
      <Seo title="New Tab" />
      <Box textAlign="center" pt="64px" bgColor="#025A6C" h="100vh">
        <Box>
          <Link href={url} isExternal>
            <Box {...doodleBoxStyle}>
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
          <InputGroup w="560px" borderRadius="22px" bgColor="#fff">
            <InputLeftElement h={inputHeight} w="52px" pointerEvents="none">
              <Icon as={AiOutlineSearch} color="#969696" />
            </InputLeftElement>

            <Input {...mainInputStyle} placeholder="Search Google or type a URL" />

            <InputRightElement h={inputHeight} w="44px" cursor="pointer">
              <Icon as={IoMdMic} color="skyblue" />
            </InputRightElement>
          </InputGroup>
        </Flex>

        <SiteBtns
          items={sites}
          addSite={addSite}
          updateSite={editSite}
          deleteSite={deleteSite}
        />
      </Box>
    </>
  );
};

export default ChromePage;
