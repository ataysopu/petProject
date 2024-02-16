import styled from 'styled-components';

export const InputRangeWrapper = styled.div`
    overflow: hidden;
`;

export const Input = styled.progress`
    width: 100%;
    appearance: none;
    transition: all 0.3s ease-in-out;

    ::-webkit-progress-bar {
        height: 8px;
        border-radius: 4px;
        background-color: var(--secondary-light);
    }

    ::-webkit-progress-value {
        height: 8px;
        border-radius: 4px;
        background-color: var(--primary-main);
        transition: width 0.3s ease-in-out;
    }
`;

export const ProgressInfo = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BoxContainer = styled.div`
    & div:nth-child(1) {
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: var(--grey-400);
    }

    & div:nth-child(2) {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
        color: var(--grey-900);
    }
`;
