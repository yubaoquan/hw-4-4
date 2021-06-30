import * as React from 'react';
import {
  Center,
  Wrap,
  WrapItem,
  Box,
} from '@chakra-ui/react';

import SiteBtn, { SiteItem } from './site-btn';
import AddBtn from './site-add-btn';

interface Props {
  items: SiteItem[]
  addSite: (site: SiteItem) => void
}

const TWO_LINE_MIN_COUNT = 5;

const SiteBtns: React.FC<Props> = ({ items, addSite }: Props) => {
  console.info('items.length:', items.length);

  if (!items.length) return null;

  if (items.length < TWO_LINE_MIN_COUNT) {
    return (
      <Center>
        <Wrap>
          { items.map((item) => <WrapItem key={item.url}><SiteBtn {...item} /></WrapItem>) }
        </Wrap>
        <Wrap>
          <AddBtn addSite={addSite} />
        </Wrap>
      </Center>
    );
  }

  const cutPoint = Math.floor((items.length) / 2);

  const firstRowItems = items.slice(0, cutPoint);
  const secondRowItems = items.slice(cutPoint);
  console.info(cutPoint);
  return (
    <Box>
      <Center>
        <Wrap>
          { firstRowItems.map((item) => <WrapItem key={item.url}><SiteBtn {...item} /></WrapItem>) }
        </Wrap>

      </Center>
      <Center>
        <Wrap>
          { secondRowItems.map((item) => (
            <WrapItem key={item.url}>
              <SiteBtn {...item} />
            </WrapItem>
          )) }
          <Wrap>
            <AddBtn addSite={addSite} />
          </Wrap>
        </Wrap>
      </Center>
    </Box>
  );
};

export default SiteBtns;
