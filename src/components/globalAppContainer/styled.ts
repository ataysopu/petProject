import styled from 'styled-components';
import { mediaQueries } from '../../core/config/breakpoints';

export const Layout = styled.div`
    width: 100%;
    height: 100%;
`;

export const Container = styled.div<Partial<any>>`
    max-width: 1232px;
    width: 100%;
    margin: 0 auto;
    padding: ${(props) => (props.header ? '151px 16px 0 16px;' : '0 16px 0 16px')};
    ${(props) => mediaQueries('lg')(`padding: ${props.header ? '151px 16px 0 16px;' : '0 16px 0 16px'}`)};
`;
