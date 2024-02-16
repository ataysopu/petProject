import styled from 'styled-components';
import { Typography } from '../../components';
import { mediaQueries } from '../../core/config/breakpoints';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const Title = styled(Typography)`
    margin-bottom: 40px;
    padding-left: 24px;

    ${mediaQueries('lg')`
    margin-top: 24px;
    margin-bottom: 16px;
    padding-left: 0;
  `}

    ${mediaQueries('md')`
    white-space: break-spaces;
  `}
`;

export const SubTitle = styled.span`
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: var(--primary-main);
`;

export const STabs = styled(Tabs)`
    width: 100%;
`;

export const STabList = styled(TabList)`
    list-style-type: none;
    padding-left: 24px;
    display: flex;
    margin: 0;

    ${mediaQueries('lg')`
    padding-left: 0;
  `};
`;

export const STab = styled(Tab)`
    border: none;
    padding: 8px 24px;
    user-select: none;
    cursor: pointer;

    &:first-child {
        margin-right: 16px;
    }

    &[aria-selected='false'] h6 {
        color: #868588;
    }

    &.is-selected {
        color: var(--grey-1000);
        padding: 8px 24px;
        background: var(--grey-100);
        border-radius: 8px;
    }
`;

export const STabPanel = styled(TabPanel)`
    display: none;
    padding-top: 24px;

    &.is-selected {
        display: block;
    }
`;
