import React from 'react';
import { TUser } from '../../../core/types/user';
import { useDeviceDetected } from '../../../core/hooks/useDeviceDetected';
import { PersonalForm } from './personalForm';

import {
  AddPersonalInfoBtn,
  Column,
  ListInfoItem,
  PersonalListInfo,
  PersonalTitle,
  PersonalWrapper,
  Text
} from './styled';

import { ReactComponent as CalendarIcon } from 'assets/icons/profile/calendar.svg';
import { ReactComponent as EmilIcon } from 'assets/icons/profile/email.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/profile/phone.svg';
import { ReactComponent as PinIcon } from 'assets/icons/profile/pin.svg';
import { ReactComponent as GenderIcon } from 'assets/icons/profile/gender.svg';
import { ReactComponent as UserIcon } from 'assets/icons/profile/user.svg';

interface IPersonalProps {
  data: TUser;
}

export const Personal: React.FC<IPersonalProps> = ({ data }) => {
  const [openPersonalForm, setOpenPersonalForm] = React.useState<boolean>(false);
  const isMobile = useDeviceDetected();

  return (
    <PersonalWrapper>
      <PersonalTitle>
        Личная информация
        {!isMobile && !openPersonalForm && (
          <AddPersonalInfoBtn onClick={() => setOpenPersonalForm(!openPersonalForm)}>
            + Добавить данные
          </AddPersonalInfoBtn>
        )}
      </PersonalTitle>
      <Column>
        {!openPersonalForm && (
          <PersonalListInfo>
            <ListInfoItem>
              <UserIcon />
              <Text>
                <div>Фамилия имя отчество</div>
                <div>{data.name}</div>
              </Text>
            </ListInfoItem>
            <ListInfoItem>
              <CalendarIcon />
              <Text>
                <div>Дата рождения</div>
                <div>{data.birthday}</div>
              </Text>
            </ListInfoItem>
            <ListInfoItem>
              <PhoneIcon />
              <Text>
                <div>Номер телефона</div>
                <div>{data.phone}</div>
              </Text>
            </ListInfoItem>
            <ListInfoItem>
              <GenderIcon />
              <Text>
                <div>Пол</div>
                <div>{data.gender}</div>
              </Text>
            </ListInfoItem>
            <ListInfoItem>
              <EmilIcon />
              <Text>
                <div>Email</div>
                <div>{data.email}</div>
              </Text>
            </ListInfoItem>

            {isMobile && !openPersonalForm && (
              <AddPersonalInfoBtn onClick={() => setOpenPersonalForm(!openPersonalForm)}>
                + Добавить данные
              </AddPersonalInfoBtn>
            )}
          </PersonalListInfo>
        )}
        <PersonalForm closeForm={setOpenPersonalForm} isOpenForm={openPersonalForm} />
      </Column>

      <PersonalTitle style={{ marginTop: '20px' }}>Адресная ифнормация</PersonalTitle>
      <Column>
        <ListInfoItem>
          <PinIcon />
          <Text>
            <div>Домашний адрес</div>
            <div>{data.adress}</div>
          </Text>
        </ListInfoItem>
      </Column>
    </PersonalWrapper>
  );
};
