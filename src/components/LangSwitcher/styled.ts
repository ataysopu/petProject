import styled from 'styled-components';
import { Select } from '../select';

export const CustomSelect = styled(Select)`
    .title-container {
        max-width: 130px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;
    }

    .input {
        font-family: 'PT Root UI regular';
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.4px;
        color: var(--grey-600);
        border: none;
        padding: 0 0 0 8px;
        height: initial;
    }

    .icon-value-container,
    .icon-container {
        position: relative;
        left: 0;
        right: 0;
        transform: none;
    }

    .dropdownList {
        width: 257px;
        padding: 8px;
        left: -125px;
        bottom: -127px;
    }
`;

interface IListItem {
  selected: boolean;
}

export const ListItem = styled.li<IListItem>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding: 12px 8px;
    border-radius: 8px;
    background-color: ${({ selected }) => selected && '#F5F5F5'};

    img {
        margin-right: 12px;
    }
`;

export const LangModalContainer = styled.div`
    padding: 16px;
    background: var(--grey-0);
    height: 100%;
`;

export const LangModalTitle = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    -webkit-letter-spacing: 0.15px;
    -moz-letter-spacing: 0.15px;
    -ms-letter-spacing: 0.15px;
    letter-spacing: 0.15px;
    color: var(--grey-1000);
    margin-bottom: 18px;
    margin-top: 3px;
`;

export const LangList = styled.ul``;
