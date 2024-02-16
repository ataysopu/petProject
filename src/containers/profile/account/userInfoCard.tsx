import { TUser, UserRole } from '../../../core/types/user';
import React from 'react';
import { UserAvatar, UserInfo, UserInfoContainer, UserPhoto } from './styled';
import { UserProgressAvatar } from './userProgressAvatar';

import userPhoto from 'assets/icons/user-photo.png';

interface IUserInfoCard {
  data: TUser;
  imageSize: number;
  svgSize: number;
  isOpenModal: boolean;
  setOpenModal: (arg: boolean) => void;
}

export const UserInfoCard: React.FC<IUserInfoCard> = ({ data, imageSize, svgSize, isOpenModal, setOpenModal }) => {
  return (
    <UserInfoContainer>
      <UserPhoto>
        {data.identifiedType === UserRole.IDENTIFIED ? (
          <UserAvatar imageSize={imageSize} src={data && data.photo ? data.photo : userPhoto} />
        ) : (
          <UserProgressAvatar svgSize={svgSize} imageSize={imageSize} isOpen={isOpenModal} openHandler={setOpenModal} />
        )}
      </UserPhoto>
      <UserInfo>
        <h3>{data.name && data.identifiedType === UserRole.IDENTIFIED ? data.name : 'Уличный клиент'}</h3>
        <span>{data.phone}</span>
      </UserInfo>
    </UserInfoContainer>
  );
};
