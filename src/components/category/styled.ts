import styled from 'styled-components';
import { mediaQueries } from '../../core/config/breakpoints';
import { Typography } from '../typography';

export const Categories = styled.div`
    width: 100%;
    min-width: 296px;
    display: flex;
    flex-wrap: wrap;
    gap: 50px 16px;
    margin-top: 80px;

    ${mediaQueries('lg')`
    display: none;
  `}
`;

export const Item = styled.div`
    position: relative;
    border-radius: 12px;
    background-color: var(--grey-100);
    width: 140px;
    height: 120px;
    cursor: pointer;
    transition: background var(--base-delay) ease;
    transition: transform var(--base-delay) ease;
    flex: 1;

    &:hover {
        color: var(--primary-white);
        transform: scale(var(--base-scale));
        background-color: var(--primary-main);
        transition: background-color var(--base-delay) ease;
        transition: transform var(--base-delay) ease;
    }
`;

export const Label = styled(Typography)`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 85px;
    line-height: 22px;
    font-size: 14px;
    text-align: center;
    display: flex;
    flex-direction: column;

    &:last-child {
        text-align: left;
    }
`;

export const Image = styled.img`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -40px;
`;

export const EmptyItem = styled(Item)`
    color: var(--grey-1000);
`;

export const CountCategory = styled(Typography)`
    font-size: 12px;
    margin-top: 4px;
    color: var(--grey-500);
`;
