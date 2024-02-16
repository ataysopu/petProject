import styled from 'styled-components';
import { mediaQueries } from '../../../core/config/breakpoints';
import { Button } from '../../../components/button';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Modal } from '../../../components';

export const OrdersWrapper = styled.div`
    padding: 32px;
    display: flex;
    flex-direction: column;

    ${mediaQueries('lg')`
    padding: 0;
    box-shadow: none;
    background: transparent;
  `};
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    position: relative;
`;

export const Title = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: var(--grey-1000);

    ${mediaQueries('lg')`
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
  `};
`;

export const FilterBtn = styled(Button)`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.46px;
    color: var(--primary-main);

    & svg {
        margin-right: 8px;
    }
`;

//TABS

export const STab = styled(Tab)`
    border: none;
    padding: 12px 24px;
    user-select: none;
    color: var(--grey-500);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: var(--grey-1000);
    font-size: 16px;

    ${mediaQueries('lg')`
    flex: 50%;
    padding: 8px 12px;
    font-size: 14px;
    letter-spacing: 0.15px;
    color: var(--grey-1000);
  `};

    &.is-selected {
        background: var(--grey-100);
        border-radius: 8px;
    }
`; //TABS

export const STabs = styled(Tabs)`
    font-size: 16px;
    font-weight: 500;
    width: 100%;
`;

export const STabList = styled(TabList)`
    list-style-type: none;
    display: flex;
    margin: 0;
    border-radius: 12px;
    padding: 4px;
    justify-content: flex-start;
    height: 56px;

    ${mediaQueries('lg')`
    height: 52px;
  `};
`;

export const STabPanel = styled(TabPanel)`
    display: none;
    padding-top: 28px;

    &.is-selected {
        display: block;
    }
`;

// ORDERS_LSIT

export const OrdersList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export const ListTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    border-radius: 8px;
    margin-bottom: 20px;

    ${mediaQueries('lg')`
    flex-direction: column;
    align-items: flex-start;
  `};
`;

export const ListTitle = styled.div`
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: var(--grey-1000);

    & strong {
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.15px;
        color: var(--primary-dark);
    }
`;
export const ListStatus = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: var(--warning-dark-text);
    cursor: pointer;

    & > svg {
        margin-right: 8px;
    }

    ${mediaQueries('lg')`
    margin-top: 12px;
  `};
`;

export const ProductInfoContainer = styled.div`
    display: flex;
    padding: 24px;
    background: #ffffff;
    box-shadow: 0px 9px 18px rgba(224, 224, 224, 0.4);
    border-radius: 12px;

    & > img {
        height: 64px;
        width: 64px;
        margin-right: 16px;
    }

    ${mediaQueries('lg')`
    & > img {
      margin-right: 8px;
    }
  `};
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Name = styled.div`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;

    & strong {
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.15px;
        color: var(--grey-1000);
        width: fit-content;

        ${mediaQueries('lg')`
      font-weight: normal;
      padding: 4px 12px;
      background: var(--grey-100);
      border-radius: 8px;
      text-align: center;
      font-size: 14px;
      line-height: 22px;
      color: var(--grey-800);
      margin-top: 10px;
  `};
    }

    ${mediaQueries('lg')`
    margin-bottom: 16px;
  `};
`;

export const Processes = styled.div`
    margin-bottom: 4px;
    display: flex;
    align-items: center;

    & div:nth-child(1) {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.15px;
        color: var(--grey-600);
    }

    & div:nth-child(2) {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.15px;
        margin-left: 4px;
        color: var(--primary-main);
    }
`;

export const PaymentMethod = styled.div`
    display: flex;
    align-items: center;

    & div:nth-child(1) {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.15px;
        color: var(--grey-600);
    }

    & div:nth-child(2) {
        font-size: 14px;
        line-height: 20px;
        margin-left: 4px;
        letter-spacing: 0.15px;
        color: var(--grey-1000);
    }
`;

export const WhyRejectedBtn = styled(Button)`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.46px;
    color: var(--primary-main);
    margin-top: 21px;
    justify-content: flex-start;
`;

// EMPTY_ORDERS_LIST

export const EmptyOrdersListWrapper = styled.div`
    padding: 32px;
    background: var(--grey-0);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: var(--grey-0);
    border-radius: 12px;
    box-shadow: var(--shadow);

    & > svg {
        margin-bottom: 20px;
    }
`;

export const EmptyListInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & div:nth-child(1) {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.15px;
        color: var(--grey-900);
        margin-bottom: 4px;
    }

    & div:nth-child(2) {
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.1px;
        color: var(--grey-700);
        margin-bottom: 16px;
        max-width: 336px;
    }
`;

export const GetCatalogBtn = styled(Button)`
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.46px;
    color: var(--primary-main);
    height: 48px;
    border: solid 1px var(--secondary-main);
    padding: 0 16px;
    border-radius: 12px;
`;

// FILTER

export const FilterWrapper = styled.div`
    position: absolute;
    background: var(--grey-0);
    box-shadow: var(--shadow);
    border-radius: 16px;
    padding: 12px;
    right: 0px;
    top: 33px;
    width: 100%;
    max-width: 289px;
`;

export const FilterList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

interface IListItemProps {
  isSelected?: boolean;
}

export const FilterListItem = styled.li<IListItemProps>`
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: var(--warning-dark-text);
    cursor: pointer;
    padding: 8px;
    background: ${({ isSelected }) => isSelected && '#f5f5f5'};
    border-radius: 8px;

    & > svg {
        margin-right: 8px;
    }

    &:hover {
        background: #f5f5f5;
        border-radius: 8px;
    }
`;

export const WrapperForClick = styled.ul``;

// FILTER_MODAL

export const FilterWithModalContainer = styled.div`
    padding: 16px;
    background: var(--grey-0);
    height: 100%;
`;

export const FilterWithModalTitle = styled.div`
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
    color: var(--grey-1000);
    margin-bottom: 18px;
    margin-top: 3px;
`;

// PREVIEW_MODAL

export const StyledModal = styled(Modal)`
    .dialog-close {
        top: 65px;
        right: 24px;
        height: 25px;
        width: 25px;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='24' height='24' rx='4' fill='%237569CE'/%3E%3Cpath d='M15.7734 8.22668L8.22668 15.7734' stroke='%23FAF9FD' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M15.7734 15.7734L8.22668 8.22668' stroke='%23FAF9FD' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");

        & > svg {
            display: none;
        }
    }

    ${mediaQueries('lg')`
    .dialog-close {
      top: 33px;
      right: 20px;
      height: inherit;
      width: inherit;
      background: none;

      & > svg {
        display: block;
      }
    }
  `};
`;

export const PreviewOrderInfoModalContainer = styled.div`
    height: 100%;
    margin-top: 50px;

    ${mediaQueries('lg')`
    margin-top: 0;
  `};
`;

export const PreviewOrderInfoInner = styled.div`
    background: linear-gradient(112.77deg, rgba(255, 255, 255, 0.8) 0%, rgba(250, 250, 250, 0.32) 100%);
    backdrop-filter: blur(10px);
    border-radius: 20px 20px 0px;
    border: solid 1px #fff;
    height: 100%;

    ${mediaQueries('lg')`
    border: none;
    background: var(--grey-0);
    border-radius: 0;
    padding: 0 16px;
  `};
`;

export const PreviewTitleContainer = styled.div`
    padding: 12px 24px;
    display: flex;
    align-items: center;
    position: relative;

    & div {
        display: flex;
        align-items: center;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
        color: var(--primary-dark);

        & svg {
            margin-right: 12px;
        }
    }

    ${mediaQueries('lg')`
    justify-content: center;
    padding-top: 29px;

    & div {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.15px;
      color: var(--grey-1000);
  
      & svg {
        display: none;
      }
    }

    &:after {
      position: absolute;
      content: '';
      height: 1px;
      left: -16px;
      top: 58px;
      right: -16px;
      background: var(--grey-100);
    }
  `};
`;

export const PreviewBodyContainer = styled.div`
    background: var(--grey-0);
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 59px;
    gap: 40px;

    ${mediaQueries('lg')`
    padding: 0;
  `};
`;

export const PreviewImage = styled.img`
    max-width: 400px;
    max-height: 400px;

    ${mediaQueries('lg')`
    display: none;
  `};
`;

export const PreviewMobileImage = styled.img`
    display: none;

    ${mediaQueries('lg')`
    height: 48px;
    width: 48px;
    margin-right: 16px;
    display: block;
  `};
`;

export const PreviewInfoBox = styled.div``;

export const PreviewStatus = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-bottom: 16px;

    & svg {
        margin-left: 11px;
    }

    ${mediaQueries('lg')`
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;

    & svg {
      margin: 0;
      margin-right: 11px;
    }
  `};
`;

export const PreviewProductName = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: var(--grey-1000);
    margin-bottom: 40px;
    max-width: 480px;

    ${mediaQueries('lg')`
    margin-bottom: 12px;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.15px;
    color: var(--grey-1000);
  `};
`;

export const PreviewRecipientList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 348px;

    ${mediaQueries('lg')`
    max-width: 100%;
    background: var(--grey-50);
    border: 1px solid var(--grey-100);
    border-radius: 12px;
    padding: 24px 20px;
  `};
`;

export const PreviewListItem = styled.li`
    display: flex;
    align-items: flex-start;

    & svg {
        margin-right: 16px;
        min-height: 50px;
        min-width: 50px;
    }

    ${mediaQueries('lg')`
    & svg {
      margin-top: -13px;
      transform: scale(0.65); 

      rect {
        fill: none;
      }
    }
  `};
`;

export const PreviewItemInfoBox = styled.div`
    & div:nth-child(1) {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
        color: var(--grey-700);
        margin-bottom: 8px;

        ${mediaQueries('lg')`
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.1px;
      margin-bottom: 5px;
    `};
    }

    & div:nth-child(2) {
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0.15px;
        color: var(--grey-1000);

        ${mediaQueries('lg')`
      font-size: 16px;
      line-height: 24px;
    `};
    }
`;

export const PreviewNameContainer = styled.div`
    ${mediaQueries('lg')`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;

    & > div {
      display: flex;
      flex-direction: column-reverse;
    }
  `};
`;
