import React, { useState, FC } from 'react';
import {
  Center,
  Wrap,
  WrapItem,
  Box,
} from '@chakra-ui/react';

import SiteBtn, { SiteItem } from './site-btn';
import AddBtn from './site-add-btn';
import useSiteEdit from './site-edit';

interface Props {
  items: SiteItem[];
  addSite: (site: SiteItem) => void;
  deleteSite: (index: number) => void;
  updateSite: (index: number, site: SiteItem) => void;
}

// 超过 5 个, 显示两行
const TWO_LINE_MIN_COUNT = 5;

// 最多显示 10 个
const MAX_COUNT = 10;

const SiteBtns: FC<Props> = ({
  items,
  addSite,
  deleteSite,
  updateSite,
}: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [curIndex, setCurIndex] = useState(-1);
  const [currentItem, setCurrent] = useState({ url: '', title: '' });
  const { render: SiteForm, showSiteForm } = useSiteEdit();

  const handleEditClick = (item: SiteItem, index: number) => {
    setIsEdit(true);
    setCurIndex(index);
    setCurrent(item);
    showSiteForm();
  };

  const handleAddClick = () => {
    console.info('handleAddClick');
    setIsEdit(false);
    setCurIndex(-1);
    setCurrent({ url: '', title: '' });
    showSiteForm();
  };

  const renderItems = (list: SiteItem[], withAddBtn = false) => (
    <>
      <Wrap>
        { list.map((item, index) => (
          <WrapItem key={ item.url }>
            <SiteBtn
              { ...item }
              onEdit={ () => handleEditClick(item, index) }
              onDelete={ () => deleteSite(index) }
            />
          </WrapItem>
        )) }

      </Wrap>
      { withAddBtn && (
      <Wrap>
        <AddBtn onClick={ handleAddClick } />
      </Wrap>
      ) }
    </>
  );

  const onSubmit = (site: SiteItem) => {
    if (isEdit) updateSite(curIndex, site);
    else addSite(site);
  };

  const siteForm = (
    <SiteForm
      isEdit={ isEdit }
      title={ currentItem.title }
      url={ currentItem.url }
      urls={ items.filter((item, index) => index !== curIndex).map((item) => item.url) }
      onSubmit={ onSubmit }
    />
  );

  if (items.length < TWO_LINE_MIN_COUNT) {
    return (
      <>
        <Center>{ renderItems(items, true) }</Center>
        { siteForm }
      </>
    );
  }

  const cutPointsMap: Record<number, number> = {
    5: 3,
    6: 4,
    7: 4,
    8: 5,
    9: 5,
    10: 5,
  };
  const cutPoint = cutPointsMap[items.length];
  const showAddBtn = items.length < MAX_COUNT;

  return (
    <>
      <Box>
        <Center>{ renderItems(items.slice(0, cutPoint)) }</Center>
        <Center>{ renderItems(items.slice(cutPoint), showAddBtn) }</Center>
      </Box>
      { siteForm }
    </>
  );
};

export default SiteBtns;
