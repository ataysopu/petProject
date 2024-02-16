import styled, { css } from 'styled-components';
import { mediaQueries } from '../../core/config/breakpoints';

export const AppLayout = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Container = styled.div`
    max-width: ${({ theme }) => theme.globalAppContainerWidth};
    width: 100%;
    margin: 0 auto;
    flex-grow: 1;
`;

export const Main = styled.div<Partial<any>>`
    max-width: 1232px;
    width: 100%;
    margin: 0 auto;
    padding: ${(props) => (props.header ? '151px 16px 0 16px;' : '0 16px 0 16px')};
    ${(props) => mediaQueries('lg')(`padding: ${props.header ? '151px 16px 0 16px;' : '0 16px 0 16px'}`)};
`;
