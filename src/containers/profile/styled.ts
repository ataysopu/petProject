import styled from 'styled-components';
import { mediaQueries } from '../../core/config/breakpoints';

export const ProfileWrapper = styled.div`
    display: flex;
    gap: 16px;
    padding-top: 130px;

    ${mediaQueries('lg')`
    flex-direction: column;
  `};
`;

export const Main = styled.div`
    width: 100%;
`;

export const Column = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    ${mediaQueries('lg')`
    max-width: 100%;
    gap: 16px;
  `};
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;

    ${mediaQueries('lg')`
    max-width: 100%;
    gap: 16px;
  `};
`;
