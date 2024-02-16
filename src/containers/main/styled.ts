import styled from 'styled-components';
import { mediaQueries } from '../../core/config/breakpoints';

export const Container = styled.div`
    max-width: 1232px;
    margin: 0 auto;
    padding: 0 16px;

    ${mediaQueries('lg')`
    padding: 0 16px;
  `}
`;

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    padding-top: 136px;

    ${mediaQueries('lg')`
    flex-direction: column;
  `}
`;

export const SliderSection = styled.div`
    gap: 18px;
    display: flex;
    align-items: flex-end;

    @media (max-width: 1240px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const SliderContainer = styled.div`
    min-height: 0px;
    min-width: 0px;
`;

export const GoodsSection = styled.div`
    ${mediaQueries('lg')`
    margin-bottom: 48px;
  `}
`;
