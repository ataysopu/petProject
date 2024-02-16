import styled from 'styled-components';
import { mediaQueries } from '../../../core/config/breakpoints';

export const QrCodeWrapper = styled.div`
    background: var(--grey-0);
    box-shadow: var(--shadow);
    border-radius: 12px;
    padding: 16px 24px;
    display: flex;
    gap: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    height: 100%;

    img {
        width: 48px;
        height: 48px;
    }

    ${mediaQueries('lg')`
    display: none;
  `};
`;

export const ImgContainer = styled.div`
    width: 88px;
    height: 88px;
    border-radius: 50%;
    overflow: hidden;
    background: #f6f5fa;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Left = styled.div``;
export const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Title = styled.h4`
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.15px;
    color: #212021;
`;

export const Text = styled.p`
    margin-top: 8px;
    font-size: 14px;
    line-height: 157%;
    letter-spacing: 0.1px;
    color: #212021;
`;
