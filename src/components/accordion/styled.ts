import styled from 'styled-components';

export const AccordionCover = styled.div`
    width: 100%;
`;

export const AccordionHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-top: solid 1px var(--grey-200);
    padding: 16px 0;
`;

export const AccordionTitle = styled.div`
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    -webkit-letter-spacing: 0.15px;
    -moz-letter-spacing: 0.15px;
    -ms-letter-spacing: 0.15px;
    letter-spacing: 0.15px;
    color: var(--grey-800);
`;

export const Child = styled.div``;