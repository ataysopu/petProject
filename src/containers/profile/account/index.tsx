import { TUser } from '../../../core/types/user';
import { Controll, Tab } from '../controll';
import React from 'react';
import { useDeviceDetected } from '../../../core/hooks/useDeviceDetected';
import { AccountWrapper, CollapseContainer, ToggleMenu } from './styled';
import { UserInfoCard } from './userInfoCard';

import { ReactComponent as MenuToggleIcon } from 'assets/icons/prevSlide.svg';

interface IAccountMenuProps {
  data: TUser;
  isOpenModal: boolean;
  setOpenModal: (arg: boolean) => void;
}

export const AccountLeftMenu: React.FC<IAccountMenuProps> = (
  {
    data,
    isOpenModal,
    setOpenModal
  }) => {
  const [collapse, setCollapse] = React.useState<boolean>(true);
  const isMobile = useDeviceDetected();

  return (
    <CollapseContainer isCollapse={collapse}>
      <AccountWrapper>
        <ToggleMenu onClick={() => setCollapse(!collapse)}>
          <MenuToggleIcon />
        </ToggleMenu>
        <UserInfoCard
          data={data}
          svgSize={isMobile || collapse ? 70 : 210}
          imageSize={isMobile || !collapse ? 130 : 38}
          isOpenModal={isOpenModal}
          setOpenModal={setOpenModal}
        />
      </AccountWrapper>
      <Controll isCollapse={collapse} />
    </CollapseContainer>
  );
};
