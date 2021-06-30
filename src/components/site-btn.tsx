import * as React from 'react';
import {
  Avatar,
  Text,
  Link,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

import { FiMoreVertical } from 'react-icons/fi';
import useSiteEdit from './site-edit';

export interface SiteItem {
  icon?: string,
  title: string,
  url: string,
}

const SiteBtn: React.FC<SiteItem> = ({ icon, title, url }: SiteItem) => {
  const linkStyle = {
    textDecoration: 'none',
    _hover: {
      textDecoration: 'none',
    },
    _focus: {
      outline: 0,
    },
  };

  const containerStyle: any = {
    w: '112px',
    h: '112px',
    direction: 'column',
    align: 'center',
    justify: 'flex-start',
    borderRadius: '4px',

    position: 'relative',
    _hover: {
      bgColor: 'rgba(255, 255, 255, .1)',
    },
  };

  const menuBtnStyle: any = {
    display: 'none',
    position: 'absolute',
    right: '2px',
    top: '4px',
    bgColor: 'transparent',
    borderRadius: '50%',
    _hover: { bgColor: 'rgba(32, 33, 36, 0.16)' },

    // https://github.com/chakra-ui/chakra-ui/discussions/2386
    _groupHover: { display: 'block' },
  };

  const moreBtnStyle = {
    color: '#fff',
    w: '28px',
    h: '28px',
    p: '5px',
  };

  const textStyle: any = {
    mt: '6px',
    p: '2px 8px',
    whiteSpace: 'nowrap',
    color: 'rgba(144, 210, 224, 1)',
    fontSize: '13px',
    width: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  };

  const { render: SiteForm, showSiteForm } = useSiteEdit();

  const handleLinkClick = (e: React.MouseEvent) => {
    const { nodeName } = e.target as Element;
    if (nodeName === 'BUTTON') e.preventDefault();
  };

  const handleRemoveClick = () => {
    console.info('remove this site');
  };

  const handleEditConfirm = (form: any) => {
    console.info('handle update', form);
  };

  return (
    <>
      <Link href={url} {...linkStyle} title={title} onClick={handleLinkClick}>
        <Flex {...containerStyle} role="group">
          <Menu placement="left-start">
            <MenuButton {...menuBtnStyle}>
              <Icon
                as={FiMoreVertical}
                aria-label="more"
                {...moreBtnStyle}
                title="More actions"
              />
            </MenuButton>
            <MenuList fontSize="13px" w="128px">
              <MenuItem onClick={showSiteForm}>Edit shortcut</MenuItem>
              <MenuItem onClick={handleRemoveClick}>Remove</MenuItem>
            </MenuList>
          </Menu>

          <Avatar name={title} src={icon} size="md" bg="rgba(25, 25, 25, 1)" mt="16px" />
          <Text {...textStyle}>{title}</Text>
        </Flex>
      </Link>
      <SiteForm isEdit title={title} url={url} onSubmit={handleEditConfirm} />
    </>
  );
};

export default SiteBtn;
