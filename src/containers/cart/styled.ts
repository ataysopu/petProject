import styled from 'styled-components';
import { mediaQueries } from '../../core/config/breakpoints';
import { DesktopCard } from '../../components/card/desktop';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

export const Title = styled.h4`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 133.4%;
    padding: 0;
    margin-bottom: 24px;
    margin-top: 125px;
    color: var(--grey-1000);

    ${mediaQueries('xl')`
    font-size: 20px;
  `};
`;

export const DesktopCardStyled = styled(DesktopCard)`
    max-width: 100%;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    ${mediaQueries('xl')`
    flex-direction: column;
  `};
`;

export const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const STabs = styled(Tabs)`
    position: relative;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
`;

export const STabList = styled(TabList)`
    list-style-type: none;
    display: flex;
    margin: 0;
`;

export const STab = styled(Tab)`
    border: none;
    padding: 8px 24px;
    user-select: none;
    color: var(--grey-500);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.4px;

    ${mediaQueries('lg')`
    padding: 8px 12px;
  `};

    &.is-selected {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.4px;
        color: var(--grey-1000);
        background: var(--grey-100);
        border-radius: 8px;
    }
`;

export const STabPanel = styled(TabPanel)`
    display: none;
    padding: 20px 0;

    &.is-selected {
        display: block;
    }
`;
