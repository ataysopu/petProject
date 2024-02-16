import React from 'react';
import { BannerCover, Image } from './styled';

import { ReactComponent as OneplusIcon } from 'assets/icons/banner/mobileLogos/oneplus.svg';
import { ReactComponent as AppleIcon } from 'assets/icons/banner/mobileLogos/apple.svg';
import { ReactComponent as SamsungIcon } from 'assets/icons/banner/mobileLogos/samsung.svg';
import { ReactComponent as MiIcon } from 'assets/icons/banner/mobileLogos/mi.svg';

const BRANDS = [
  {
    href: '/apple',
    icon: <AppleIcon />
  },
  {
    href: '/mi',
    icon: <OneplusIcon />
  },
  {
    href: '/oneplus',
    icon: <SamsungIcon />
  },
  {
    href: '/samsung',
    icon: <MiIcon />
  }
];

export const BannerPartner: React.FC = () => {
  return (
    <BannerCover>
      {BRANDS.map((brand, idx) => (
        <Image href={brand.href} key={idx}>
          {brand.icon}
        </Image>
      ))}
    </BannerCover>
  );
};
