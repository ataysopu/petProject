import styled from 'styled-components';
import { mediaQueries } from '../../../core/config/breakpoints';
import { Button } from '../../../components/button';

export const PassportFormWrapper = styled.div`
    background: var(--grey-0);
    box-shadow: var(--shadow);
    border-radius: 12px;
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${mediaQueries('lg')`
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    border: 1px solid var(--grey-100);
    
    & > img {
      width: 55px;
      height: 55px;
      margin-right: 16px;
    }
  `};
`;

export const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.15px;
    color: var(--grey-1000);
    margin-bottom: 12px;

    ${mediaQueries('lg')`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: var(--grey-900);
    text-align: left;
    margin-bottom: 16px;
  `};
`;

export const Description = styled.div`
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.15px;
    color: var(--grey-800);
    margin-bottom: 44px;

    ${mediaQueries('lg')`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: var(--grey-800);
    text-align: left;
    margin-bottom: 16px;
  `};
`;

export const FillBtn = styled(Button)`
    font-size: 17px;
    font-weight: bold;
    line-height: 20px;
    letter-spacing: 0.46px;
    padding: 18px 12px;
    border-radius: 12px;
    border: solid 1px var(--secondary-main);
    color: var(--primary-main);

    ${mediaQueries('lg')`
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.46px;
    color: var(--primary-main);
    padding: 9px 12px;
    width: fit-content;
  `};
`;
