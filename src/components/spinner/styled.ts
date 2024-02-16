import styled, { keyframes } from 'styled-components';

const bubble = keyframes`
    0%,
    80%,
    100% {
        box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
        box-shadow: 0 2.5em 0 0;
    }
`;

export default styled.div`
    color: var(--primary-main);
    font-size: '10px';
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;

    &,
    &:before,
    &:after {
        border-radius: 50%;
        width: 12px;
        height: 12px;
        animation-fill-mode: both;
        animation: ${bubble} 2s infinite ease-in-out;
    }

    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 0;
    }

    &:before {
        left: -20px;
        animation-delay: -0.32s;
    }

    &:after {
        left: 20px;
        animation-delay: 0.32s;
    }
`;