import { TOrders } from '../../../core/types/user';
import React from 'react';
import { FilterList, FilterListItem, FilterWithModalContainer, FilterWithModalTitle, WrapperForClick } from './styled';
import { Modal } from '../../../components';
import { Status } from './status';

import { ReactComponent as AllIcon } from 'assets/icons/profile/all.svg';

interface IFilterWithModalProps {
  data: TOrders[];
  open: boolean;
  close: (arg: boolean) => void;
  isSelected: number;
  chooseFilter: (arg: number) => void;
}

export const FilterWithModal: React.FC<IFilterWithModalProps> = ({ data, open, close, isSelected, chooseFilter }) => {
  return (
    <Modal isOpen={open} onClose={() => close(false)} top="34%">
      <FilterWithModalContainer>
        <FilterWithModalTitle>Фильтр</FilterWithModalTitle>
        <FilterList>
          <FilterListItem style={{ color: '#003420' }} onClick={() => chooseFilter(0)} isSelected={isSelected === 0}>
            <AllIcon /> Все
          </FilterListItem>
          {data.map((item: any) => (
            <WrapperForClick key={item.applicationId} onClick={() => chooseFilter(item.status)}>
              <Status props={item.status} Component={FilterListItem} isSelected={item.status === isSelected} />
            </WrapperForClick>
          ))}
        </FilterList>
      </FilterWithModalContainer>
    </Modal>
  );
};
