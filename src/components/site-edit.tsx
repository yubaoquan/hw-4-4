import * as React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { REG, addProtocol } from '@/utils/regexp';
import { Address4 } from 'ip-address';

interface SiteEditProps {
  isEdit?: boolean,
  title?: string,
  url?: string,
  urls: string[],
  onSubmit: (form: any) => void
}

const { useState } = React;

const inputStyle = {
  h: '27px',
  fontSize: '13px',
  bgColor: 'rgb( 241, 243, 244)',
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderRadius: '4px',
  p: '6px 8px',
  borderBottom: '2px solid transparent',
  _hover: {
    borderColor: 'transparent',
  },
  _focus: {
    outline: 0,
    borderBottom: '2px solid rgb( 51, 103, 214)',
  },
};

const confirmBtnStyle = {
  p: '8px 16px',
  fontSize: '13px',
  fontWeight: 'normal',
  bgColor: '#1a73e8',
  _disabled: {
    color: 'rgb(128, 134, 139)',
    bgColor: 'rgb(241, 243, 244)',
  },

  _hover: {
    _disabled: {
      bgColor: 'rgb(241, 243, 244)',
      cursor: 'auto',
    },
  },
};

const labelStyle = {
  fontSize: '10px',
  color: 'rgb(95, 99, 104)',
  mb: '8px',
  _focus: {
    color: 'rgb( 26, 115, 232)',
  },
};

const useEditSite = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const render: React.FC<SiteEditProps> = ({
    isEdit, title = '', url = '', urls, onSubmit,
  }: SiteEditProps) => {
    const getFinalUrl = (input: string) => addProtocol(
      REG.number.test(input)
        ? `${Address4.fromInteger(+input).address}/`
        : input,
    );

    const formik = useFormik({
      initialValues: { title, url },
      validationSchema: Yup.object({
        url: Yup.string()
          .trim()
          .required('请输入网站地址'),
      }),
      onSubmit(values) {
        // 这里先close再更新状态, 否则更新状态再onClose, 会报错
        // https://stackoverflow.com/questions/66597999/cant-perform-a-react-state-update-with-formik-on-form-submit
        onClose();

        const finalUrl = getFinalUrl(values.url);
        const notModified = (values.title === title) && (finalUrl === url);

        const icon = `https://s2.googleusercontent.com/s2/favicons?domain_url=${finalUrl}`;

        if (notModified) onClose();
        else onSubmit({ title: values.title, url: finalUrl, icon });
      },
    });

    const urlDuplicated = () => {
      const finalUrl = getFinalUrl(formik.values.url);
      return urls.includes(finalUrl);
    };

    const handleClose = () => {
      onClose();
      formik.resetForm();
    };

    const [expand, setExpand] = useState(false);

    const handleOverlayClick = () => {
      setExpand(true);
      setTimeout(() => {
        setExpand(false);
      }, 80);
    };

    return (
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        blockScrollOnMount={false}
        closeOnOverlayClick={false}
        onOverlayClick={handleOverlayClick}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          transition="transform 80ms"
          transform={expand ? 'scale(1.02, 1.02)!important' : 'scale(1, 1)!important'}
        >
          <ModalHeader
            fontSize="15px"
            fontWeight="normal"
            color="rgb(32, 33, 36)"
            p="20px 20px 16px"
          >
            {isEdit ? 'Edit shortcut' : 'Add shortcut'}
          </ModalHeader>
          <ModalBody p="0 20px">
            <form onSubmit={formik.handleSubmit}>
              <FormControl id="title" mb="20px">
                <FormLabel {...labelStyle}>Name</FormLabel>
                <Input {...formik.getFieldProps('title')} {...inputStyle} />
              </FormControl>

              <FormControl id="url" mb="30px" isInvalid={urlDuplicated()}>
                <FormLabel {...labelStyle}>URL</FormLabel>
                <Input {...formik.getFieldProps('url')} {...inputStyle} />
                <FormErrorMessage fontSize="10px">Shortcut already exists</FormErrorMessage>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter p="24px 16px 16px">
            <Button
              size="sm"
              mr={3}
              onClick={handleClose}
              variant="outline"
              p="8px 16px"
              fontSize="13px"
              fontWeight="500"
              color="rgb(26, 115, 232)"
            >
              Cancel
            </Button>
            <Button
              size="sm"
              colorScheme="blue"
              isDisabled={!formik.values.url}
              {...confirmBtnStyle}
              onClick={formik.handleSubmit as any}
            >
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  return {
    render,
    showSiteForm: onOpen,
  };
};

export default useEditSite;
