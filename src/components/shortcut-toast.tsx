import { Box, Text, Button } from '@chakra-ui/react';
import * as React from 'react';

interface Props {
  notifyType: 'edit' | 'add' | 'remove',
  onUndo: () => void,
  onRestore: () => void,
}

const ShortcutToast: React.FC<Props> = ({ notifyType, onUndo, onRestore }: Props) => {
  const text = {
    add: 'Shortcut added',
    edit: 'Shortcut edited',
    remove: 'Shortcut removed',
  }[notifyType];

  const containerStyle = {
    m: '24px',
    px: '24px',
    w: '430px',
    h: '52px',
    lineHeight: '52px',
    borderRadius: '4px',
    bgColor: 'rgb(50, 50, 50)',
    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 28%)',
  };

  const btnStyle = {
    color: 'rgb(123, 170, 247)',
    variant: 'link',
    fontSize: '13px',
    _hover: {
      textDecoration: 'none',
    },
    _focus: {
      boxShadow: 'none',
    },
    _active: {
      color: 'rgb(123, 170, 247)',
    },
  };

  return (
    <Box { ...containerStyle }>
      <Text as="span" color="#fff" fontSize="13px">{ text }</Text>
      <Button onClick={ onUndo } mx="32px" p="8px" { ...btnStyle }>Undo</Button>
      <Button onClick={ onRestore } p="8px" { ...btnStyle }>Restore default shortcuts</Button>
    </Box>
  );
};

export default ShortcutToast;
