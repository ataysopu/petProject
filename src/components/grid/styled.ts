import styled from 'styled-components';
import { IGridProps } from './types';

export const Layout = styled.div<IGridProps>`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(${({ frSize }) => frSize}, 1fr));
`;
