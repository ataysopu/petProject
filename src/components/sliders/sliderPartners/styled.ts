import styled from 'styled-components';
import { Typography } from '../../typography';
import { mediaQueries } from '../../../core/config/breakpoints';

export const Link = styled.a``;
export const Slide = styled.img``;

export const Title = styled(Typography)`
    margin-bottom: 24px;
    padding-left: 24px;

    ${mediaQueries('sm')`
    margin-bottom: 16px;
    padding: 0;
  `}
`;

export const Btn = styled.div`
    width: 48px;
    height: 48px;
    background: var(--grey-0) !important;
    box-shadow: var(--shadow);
    border-radius: 12px;
    z-index: 1;

    & svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const SlideBox = styled.div`
    display: flex !important;
    justify-content: center;
    align-items: center;
    height: 104px;
    border-radius: 12px;
    background: var(--grey-0);
`;
