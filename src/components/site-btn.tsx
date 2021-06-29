import * as React from 'react';

export interface SiteItem {
  icon?: string,
  title: string,
  url: string,
}

const SiteBtn: React.FC<SiteItem> = ({ icon, title, url }: SiteItem) => {
  console.info(icon, title, url);

  return (
    <div>
      {icon}
      /
      {title}
      /
      {url}
    </div>
  );
};

export default SiteBtn;
