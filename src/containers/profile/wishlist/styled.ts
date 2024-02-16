import styled from 'styled-components';
import { mediaQueries } from '../../../core/config/breakpoints';
import { Button } from '../../../components/button';

export const WishlistWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 18px;
`;

export const ControlContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 32px;
    margin-bottom: 12px;

    ${mediaQueries('lg')`
    flex-direction: column;
    align-items: flex-start;
    background: transparent;
    box-shadow: none;
    padding: 0;
  `}
`;

export const Title = styled.h2`
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: var(--grey-1000);

    ${mediaQueries('lg')`
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
  `}
`;

export const Control = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mediaQueries('lg')`
    margin-bottom: 24px;
  `}
`;

export const FilterBy = styled.div`
    max-width: 310px;
    height: 48px;
    border-radius: 8px;
    border: solid 1px #ebebeb;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 16px;

    ${mediaQueries('lg')`
    margin: 0;
  `}
`;

interface IToogleViewListBtn {
  gridView: string;
}

export const ToogleViewListBtn = styled(Button)<IToogleViewListBtn>`
    transform: ${({ gridView }) => gridView && 'rotate(180deg);'};
    transition: all 0.3s linear;
    ${mediaQueries('lg')`
    display: none;
  `};
`;

export const GoodsContainer = styled.div``;

// EMPTY_WISHLIST

export const EmptyListWrapper = styled.div`
    padding: 30px;
    background: var(--grey-0);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

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
