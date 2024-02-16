import React from 'react';
import { TOrders } from '../../../core/types/user';
import { useDeviceDetected } from '../../../core/hooks/useDeviceDetected';
import { useOutsideClick } from '../../../core/hooks/useOutsideClick';
import { FilterWithModal } from './filterWithModal';
import { List } from './ordersList';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../../../routes/urls';
import { PreviewOrderInfoModal } from './previewOrderinfoModal';
import { Status } from './status';

import {
  EmptyListInfo,
  EmptyOrdersListWrapper,
  FilterBtn,
  FilterList,
  FilterListItem,
  FilterWrapper, GetCatalogBtn,
  OrdersWrapper, STab, STabList, STabPanel, STabs,
  Title,
  TitleContainer,
  WrapperForClick
} from './styled';

import { ReactComponent as FilterIcon } from 'assets/icons/profile/filter.svg';
import { ReactComponent as EmptyIcon } from 'assets/icons/profile/empty_order__icon.svg';
import { ReactComponent as AllIcon } from 'assets/icons/profile/all.svg';

interface IOrdersProps {
  data: TOrders[];
  openPreviewModal?: (arg: any) => void;
}

export const Orders: React.FC<IOrdersProps> = React.memo(({ data }) => {
  const [filterBy, setFilterBy] = React.useState<number>(0);
  const [openFilter, setOpenFilter] = React.useState<boolean>(false);
  const [openMobileFilterModal, setOpenMobileFilterModal] = React.useState<boolean>(false);
  const [openPreviewOrderModal, setOpenPreviewOrderModal] = React.useState<any>({ modal: false, data: [] });

  const filterRef = React.useRef<HTMLDivElement>(null);
  const isMobile = useDeviceDetected();

  const chooseFilterAndClose = React.useCallback(
    (status: number) => {
      setFilterBy(status);
      setOpenFilter(false);
    },
    [filterBy, openFilter, openMobileFilterModal]
  );

  useOutsideClick(filterRef, () => setOpenFilter(false), true);

  return (
    <OrdersWrapper>
      <PreviewOrderInfoModal open={openPreviewOrderModal} close={setOpenPreviewOrderModal} />
      <TitleContainer>
        <Title>Заказы</Title>
        {!isMobile && openFilter ? (
          <FilterWrapper ref={filterRef}>
            <FilterList>
              <FilterListItem
                style={{ color: '#003420' }}
                onClick={() => chooseFilterAndClose(0)}
                isSelected={0 === filterBy}
              >
                <AllIcon /> Все
              </FilterListItem>
              {data.map((item) => (
                <WrapperForClick key={item.applicationId} onClick={() => chooseFilterAndClose(item.status)}>
                  <Status props={item.status} Component={FilterListItem} isSelected={item.status === filterBy} />
                </WrapperForClick>
              ))}
            </FilterList>
          </FilterWrapper>
        ) : (
          <FilterWithModal
            data={data.filter(({ status }) => status)}
            open={openMobileFilterModal}
            close={setOpenMobileFilterModal}
            isSelected={filterBy}
            chooseFilter={chooseFilterAndClose}
          />
        )}
        <FilterBtn onClick={!isMobile ? () => setOpenFilter(!openFilter) : () => setOpenMobileFilterModal(!openFilter)}>
          <FilterIcon />
          Фильтр
        </FilterBtn>
      </TitleContainer>
      <STabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
        <STabList>
          <STab>Открытые заказы</STab>
          <STab>Купленные товары</STab>
        </STabList>
        <STabPanel>
          {!!data.length ? (
            <List
              data={filterBy ? data.filter(({ status }) => status === filterBy) : data}
              openPreviewModal={setOpenPreviewOrderModal}
            />
          ) : (
            <EmptyOrdersList />
          )}
        </STabPanel>
        <STabPanel>
          {!!data.length ? (
            <List data={data.filter(({ status }) => status === 1)} openPreviewModal={setOpenPreviewOrderModal} />
          ) : (
            <EmptyOrdersList />
          )}
        </STabPanel>
      </STabs>
    </OrdersWrapper>
  );
});

export const EmptyOrdersList = () => {
  const navigate = useNavigate();

  return (
    <EmptyOrdersListWrapper>
      <EmptyIcon />
      <EmptyListInfo>
        <div>Ваш список заказов пока пуст</div>
        <div>Найдите товары в нашем каталоге или воспользуйтесь поиском</div>
        <GetCatalogBtn onClick={() => navigate(URLS.Catalog)}>Перейти в каталог</GetCatalogBtn>
      </EmptyListInfo>
    </EmptyOrdersListWrapper>
  );
};
