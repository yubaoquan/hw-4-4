import * as React from 'react';
import {
  Center,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import SiteBtn, { SiteItem } from './site-btn';
import AddBtn from './site-add-btn';

interface Props {
  items: SiteItem[]
}

const TWO_LINE_MIN_COUNT = 5;

const SiteBtns: React.FC<Props> = ({ items }: Props) => {
  console.info('111');

  if (!items.length) return null;

  if (items.length < TWO_LINE_MIN_COUNT) {
    return (
      <Center>
        <Wrap>
          { items.map((item) => <WrapItem key={item.url}><SiteBtn {...item} /></WrapItem>) }
        </Wrap>
        <Wrap>
          <AddBtn />
        </Wrap>
      </Center>
    );
  }

  const cutPoint = Math.floor(items.length / 2);

  const firstRowItems = items.slice(0, cutPoint);
  const secondRowItems = items.slice(cutPoint);

  return (
    <Center>
      <Wrap>
        { firstRowItems.map((item) => <WrapItem key={item.url}><SiteBtn {...item} /></WrapItem>) }
      </Wrap>
      <Wrap>
        { secondRowItems.map((item) => <WrapItem key={item.url}><SiteBtn {...item} /></WrapItem>) }
      </Wrap>
    </Center>
  );
};

export default SiteBtns;
