import styled from 'styled-components';
import { mediaQueries } from '../../../core/config/breakpoints';
import { Input } from '../../inputs/input';

export const PickCity = styled.div`
    height: 100%;
    width: 100%;
    background: var(--grey-0);
    margin: 0 auto;
    overflow-y: auto;
`;

export const Container = styled.div`
    padding: 52px 104px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    ${mediaQueries('lg')`
    padding: 34px 16px;
  `};
`;

export const InputField = styled(Input)`
    height: 56px;
    border-radius: 12px;
    background: var(--grey-100);
    color: var(--grey-500);

    &:focus {
        border: solid 1px var(--secondary-main);
        background: transparent;
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.25px;
    color: var(--grey-1000);
    margin-bottom: 28px;

    & strong {
        font-weight: 500;
    }

    ${mediaQueries('lg')`
    font-size: 20px;
    line-height: 14px;
  `};
`;

export const CitiesContainer = styled.div`
    margin-top: 31px;
`;

export const CitiesTitle = styled.h6`
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.15px;
    color: var(--grey-800);
    margin-bottom: 16px;
    margin-top: 32px;

    &:not(:last-child) {
        margin-top: 24px;
    }
`;

export const CitiesFlexBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 8px;
`;

interface IChipProps {
  active: boolean;
}

export const Chip = styled.div<IChipProps>`
    font-weight: ${({ active }) => (active ? 500 : 'normal')};
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.1px;
    color: var(--grey-800);
    border-radius: 20px;
    padding: 5px 14px;
    border: solid 1px var(--primary-bg-dark);
    cursor: pointer;
`;

export const OtherCities = styled.div`
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

    &:not(:last-child) {
        margin-bottom: 32px;
    }
`;

export const OtherCitiesTitle = styled.h5`
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.1px;
    color: var(--grey-500);
    margin-bottom: 32px;
`;

export const OtherCitiesFlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${mediaQueries('lg')`
    flex-direction: column;
  `};
`;

export const OtherCity = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: var(--grey-800);
    flex: 0 0 calc(100% / 6);

    ${mediaQueries('lg')`
     &:not(:last-child) {
      margin-bottom: 32px;
     }
  `};
`;

export const NotMatch = styled.div`
    width: 100%;
    height: 316px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-bottom: 40px;
    box-shadow: var(--shadow);

    ${mediaQueries('lg')`
      height: 220px;
      margin-bottom: 32px;
  `};
`;

export const NotMatchInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & svg {
        margin-bottom: 20px;
        height: 96px;
        width: 96px;

        ${mediaQueries('lg')` 
      width: auto;
      height: auto;
  `};
    }

    & div {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: var(--grey-900);
        margin-bottom: 8px;

        ${mediaQueries('lg')`
      font-size: 16px;
      margin-bottom: 4px;
      line-height: 24px;
  `};
    }

    & span {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
        color: var(--grey-700);
        max-width: 336px;
        display: block;
        text-align: center;

        ${mediaQueries('lg')`
      font-size: 14px;
      line-height: 20px;
  `};
    }
`;
