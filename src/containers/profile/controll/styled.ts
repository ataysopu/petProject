import styled from 'styled-components';

export const ControllWrapper = styled.div`
    padding: 0 16px;
    background: var(--grey-0);
    border-radius: 12px;
`;

export const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

interface IListItemProps {
  active: boolean;
  isCollapse?: boolean;
}

export const ListItem = styled.li<IListItemProps>`
    width: 100%;
    background: var(--grey-0);
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: var(--grey-800);
    transition: gap 0.3s linear;
    gap: ${({ isCollapse }) => (isCollapse ? 0 : '10px')};
    border: ${({ active }) => (active ? '1px solid var(--secondary-main)' : '1px solid transparent')};

    & svg {
        & rect {
            fill: var(--grey-0);
        }

        & path {
            stroke: var(--primary-main);
        }
    }

    span {
        display: block;
        transition: all var(--base-delay) linear;
        overflow: hidden;
        white-space: nowrap;
        width: ${({ isCollapse }) => (isCollapse ? '0' : '140px')};
    }
`;
