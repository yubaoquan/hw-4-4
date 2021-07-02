import {
  Avatar,
  Flex,
  Icon,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { isIp, removeProtocol } from '@/utils/regexp';

export interface SiteItem {
  icon?: string;
  title: string;
  url: string;
}

interface SiteBtnProps {
  icon?: string;
  title: string;
  url: string;
  onDelete: () => void;
  onEdit: () => void;
}

const avatarContainerStyle = {
  w: '48px',
  h: '48px',
  borderRadius: '50%',
  justify: 'center',
  align: 'center',
  bgColor: 'rgb(25, 25, 25)',
  mt: '16px',
};

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

const SiteBtn: React.FC<SiteBtnProps> = ({
  icon, title, url, onDelete, onEdit,
}: SiteBtnProps) => {
  const handleLinkClick = (e: React.MouseEvent) => {
    const { nodeName } = e.target as Element;
    if (nodeName === 'BUTTON') e.preventDefault();
  };

  const domain = removeProtocol(url);
  const urlIsIp = isIp(domain.slice(0, domain.length - 1));
  const shouldShowIcon = !urlIsIp && icon;

  return (
    <>
      <Link href={url} {...linkStyle} title={title} onClick={handleLinkClick}>
        <Flex {...containerStyle} role="group">
          <Menu placement="left-start">
            <MenuButton {...menuBtnStyle}>
              <Icon
                as={FiMoreVertical}
                aria-label="more"
                title="More actions"
                {...moreBtnStyle}
              />
            </MenuButton>
            <MenuList fontSize="13px" w="128px">
              <MenuItem onClick={onEdit}>Edit shortcut</MenuItem>
              <MenuItem onClick={onDelete}>Remove</MenuItem>
            </MenuList>
          </Menu>

          <Flex {...avatarContainerStyle}>
            {
              shouldShowIcon
                ? <Image src={icon} w="24px" h="24px" />
                : <Avatar name={urlIsIp ? 'I P' : url} size="xs" />
            }
          </Flex>
          <Text {...textStyle}>{title}</Text>
        </Flex>
      </Link>
    </>
  );
};

SiteBtn.defaultProps = {
  icon: '',
};

export default SiteBtn;
