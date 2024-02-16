import styled from 'styled-components';
import Carousel from 'react-slick';
import { mediaQueries } from '../../../core/config/breakpoints';

export const Slider = styled(Carousel)`
    &&.slick-slider ul {
        position: absolute;
        display: block;
        width: 100%;
        top: 0;
        bottom: -15px;
        padding: 0;
        margin: 0;
        list-style: none;
        text-align: center;
        display: ${({ hover }: any) => (hover ? 'block !important' : 'none !important')};
    }

    &&.slick-slider ul li {
        position: relative;
        display: inline-block;
        width: calc(100% / 4 - 5px);
        height: 100%;
        margin: 0;
        padding: 0;
        cursor: pointer;
        border-bottom: solid 1px var(--grey-100);

        &:not(:last-child) {
            margin-right: 5px;
        }

        &.slick-active {
            border-bottom: solid 1px var(--grey-400);
        }
    }

    &&.slick-slider li button {
        background: var(--grey-100);
        border-radius: 2px;
        box-shadow: none;
        margin: 0;
        width: 100%;
        padding: 0;
        height: 100%;
        opacity: 0;
    }

    ${mediaQueries('lg')`
    &&.slick-slider ul {
      position: absolute;
      bottom: -25px;
      display: block;
      width: 100%;
      padding: 0;
      margin: 0;
      list-style: none;
      text-align: center;
      top: auto;
      display: flex;
      justify-content: space-around;

    }
  
    &&.slick-slider ul li {
      position: relative;
      display: inline-block;
      width: 41px;
      height: 1px;
      margin: 0 5px;
      padding: 0;
      cursor: pointer;
      border-bottom: solid 1px var(--grey-100);

      &:not(:last-child) {
        margin-right: 5px;
      }

      &.slick-active {
        border-bottom: solid 1px var(--grey-400);
      }
    }
  
    &&.slick-slider li button {
      background: transparent;
      border-radius: 2px;
      box-shadow: none;
      margin: 0;
      padding: 0;
      opacity: 0;
    }
  
  `}
`;
