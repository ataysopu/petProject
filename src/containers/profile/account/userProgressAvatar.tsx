import React from 'react';
import { ProfileContext } from '../../../context/profileContext';
import { Progress } from './progressive';

import { ProgressiveContainer, UserAvatar, UserProgressAvatarWrapper } from './styled';

import step1 from 'assets/icons/profile/Property1.png';

interface IUserProgressAvatarProps {
  isOpen: boolean;
  openHandler: (open: boolean) => void;
  imageSize?: number;
  svgSize?: number;
}

export const UserProgressAvatar: React.FC<IUserProgressAvatarProps> = ({ isOpen, openHandler, imageSize, svgSize }) => {
  const { settings } = React.useContext(ProfileContext);
  return (
    <UserProgressAvatarWrapper onClick={() => openHandler(!isOpen)}>
      <ProgressiveContainer>
        {/*<Progress refElement={settings.personalRef} svgSize={svgSize} />*/}
      </ProgressiveContainer>
      <UserAvatar src={step1} imageSize={imageSize} />
    </UserProgressAvatarWrapper>
  );
};
