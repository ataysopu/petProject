import styled from 'styled-components';
import { mediaQueries } from '../../../core/config/breakpoints';
import Carousel from 'react-slick';

export const Slider = styled(Carousel)`
    &.slick-slider .slick-dot {
        left: 50%;
        transform: translateX(-50%);
        bottom: 27px;
        position: absolute;
        z-index: 2;
        display: flex !important;
        justify-content: center;

        ${mediaQueries('lg')`
        bottom: -16px;
    `}
    }

    &.slick-slider ul li {
        margin-right: 12px;

        &.slick-active button {
            background-color: var(--primary-main);
        }
    }

    &.slick-slider ul li button {
        height: 12px;
        width: 12px;
        border-radius: 50%;
        font-size: 0;
        border: none;
        padding: 0;

        ${mediaQueries('lg')`
        height: 8px;
        width: 8px;
    `}
    }
`;
