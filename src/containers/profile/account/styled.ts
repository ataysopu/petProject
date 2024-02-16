import styled, { css, keyframes } from 'styled-components';
import { mediaQueries } from '../../../core/config/breakpoints';
import { Button } from '../../../components/button';

export const AccountWrapper = styled.div`
    position: relative;
    width: 296px;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const ToggleMenu = styled.button`
    position: absolute;
    top: 3px;
    right: -16px;
    cursor: pointer;

    width: 32px;
    height: 32px;
    display: flex;
    outline: none;
    border: none;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border-radius: 32px;
    filter: drop-shadow(0px 3px 18px rgba(204, 204, 204, 0.4));
    z-index: 1;

    svg {
        width: 10px;
    }
`;

export const UserPhoto = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const UserAvatar = styled.img<any>`
    max-width: ${({ imageSize }) => (imageSize ? `${imageSize}px` : '140px')};
    transition: all linear var(--base-delay);
`;

export const UserInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
    padding: 0 10px;

    h3 {
        font-size: 18px;
        line-height: 155%;
        letter-spacing: 0.15px;
        color: #121112;
        text-align: center;
    }

    span {
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.15px;
        color: #868588;
        text-align: center;
    }
`;

export const UserInfoContainer = styled.div`
    width: 100%;

    ${mediaQueries('lg')`
    display: flex;
    flex-flow: row nowrap;
    gap: 16px;
    margin-left: 10px;
  `}
    ${UserPhoto} {
        ${mediaQueries('lg')`
    width: auto
  `}
    }

    ${UserInfo} {
        ${mediaQueries('lg')`
    padding: 0;
    margin: 0;
    gap: 5px;
    align-items: flex-start;

    h3, span {
      text-align: left;
    }

    h3 {
      font-size: 16px;
    }

    span {
      font-size: 14px;
    }
  `};
    }
`;

const showAnimation = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
        visibility: hidden;
    }
    100% {
        opacity: 1;
        visibility: visible;
    }
`;

const hideAnimation = keyframes`
    0% {
        overflow: visible;
    }
    30% {
        overflow: hidden;
    }
    100% {
        overflow: hidden;
    }
`;

interface ICollapseContainer {
  isCollapse: boolean;
}

export const CollapseContainer = styled.div<ICollapseContainer>`
    position: sticky;
    top: 100px;
    height: 678px;
    max-height: 100%;
    padding: 32px 0;
    border-radius: 12px;
    background: var(--grey-0);
    box-shadow: 0px 9px 18px rgba(224, 224, 224, 0.3);

    ${mediaQueries('lg')`
      display: none;
  `};

    // styles for collapse animation

    ${AccountWrapper} {
        width: ${({ isCollapse }) => (isCollapse ? '72px' : '296px')};
        margin-bottom: ${({ isCollapse }) => (isCollapse ? '24px' : '48px')};
        transition: all var(--base-delay) linear;

        &:hover {
            ${ToggleMenu} {
                opacity: 1;
                visibility: visible;
            }
        }
    }

    ${ToggleMenu} {
        ${({ isCollapse }) =>
                isCollapse
                        ? css`
                            visibility: visible;
                            opacity: 1;
                            transform: rotate(-180deg);
                        `
                        : css`
                            visibility: hidden;
                            opacity: 0;
                        `}
    }

    ${UserPhoto} {
        transition: padding var(--base-delay) linear;
        padding: ${({ isCollapse }) => (isCollapse ? '0' : '21px 0')};
    }

    ${UserInfo} {
        transition: height var(--base-delay) linear;
        ${({ isCollapse }) =>
                !isCollapse
                        ? css`
                            height: 90px;
                            animation-name: ${showAnimation};
                            animation-duration: 0.6s;
                            animation-timing-function: linear;
                        `
                        : css`
                            height: 0;
                            overflow: hidden;
                            visibility: hidden;
                            animation-name: ${hideAnimation};
                            animation-duration: var(--base-delay);
                            animation-timing-function: linear;
                        `}
    }
`;

//ProgressAvatar

export const UserProgressAvatarWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProgressiveContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

interface ISvgWrapperProps {
  progress: number;
  svgSize?: number;
}

export const SvgWrapper = styled.div<ISvgWrapperProps>`
    svg {
        width: ${({ svgSize }) => (svgSize ? `${svgSize}px` : '210px')};
        height: ${({ svgSize }) => (svgSize ? `${svgSize}px` : '210px')};
        margin: auto;
        display: block;
        transition: all linear var(--base-delay);

        ${mediaQueries('lg')`
      height: 100px;
    `};
    }

    path {
        stroke-linecap: round;
        stroke-width: 2;
    }

    path.grey {
        stroke: var(--secondary-bg-light);
    }

    path.purple {
        stroke: var(--primary-main);
        stroke-dasharray: calc(40 * 3.142 * 1.85);
        stroke-dashoffset: ${({ progress }) => progress};
        transition: all 0.35s ease-in-out;
    }
`;

//MODAL

export const ModalContainer = styled.div`
    background: var(--grey-0);
    height: 100%;
    padding: 0 24px;
`;

export const ImagesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 97px;
    margin-bottom: 40px;
`;

export const Title = styled.div`
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.15px;
    color: var(--grey-1000);
    margin-bottom: 16px;
`;

export const SubTitle = styled.div`
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.1px;
    color: var(--grey-700);
    margin-bottom: 18px;
`;

export const DownloadAppBtn = styled(Button)`
    background: var(--primary-main);
    border-radius: 12px;
    padding: 15px;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.46px;
    color: var(--grey-0);
    width: 100%;
`;
