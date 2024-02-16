import styled from 'styled-components';
import { mediaQueries } from '../../../core/config/breakpoints';
import { Progress } from 'components/inputs/progress/index';

import IconArrow from 'assets/icons/chevron-right.svg';

interface ICreditWrapper {
  isVisibile: boolean;
}

export const CreditWrapper = styled.div<ICreditWrapper>`
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--grey-0);
    box-shadow: var(--shadow);
    border-radius: 12px;
    padding: 16px 24px;
    gap: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: ${({ isVisibile }) => (isVisibile ? 'pointer' : 'default')};

    &::before {
        display: none;
        content: '';
        position: absolute;
        right: 24px;
        top: 16px;
        width: 8px;
        height: 8px;
        transition: all linear var(--base-delay);
        transform: rotate(${({ isVisibile }) => (isVisibile ? '-90deg' : '90deg')});
        background: url(${IconArrow}) no-repeat center;

        ${mediaQueries('lg')`
      display: block;
    `}
    }

    ${mediaQueries('lg')`
    align-items: flex-start;
  `}
`;

export const Image = styled.img`
    max-width: 88px;
    height: 88px;

    ${mediaQueries('lg')`
    max-width: 55px;
    max-height: 55px;
  `};
`;

export const ProgressCover = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ProgressTitle = styled.div`
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.15px;
    color: var(--grey-900);
    margin-bottom: 16px;
`;

export const StyledProgress = styled(Progress)`
    ${mediaQueries('lg')`
    .progress-info {
      margin-top: 16px;
    }
  `}
`;
