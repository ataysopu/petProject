import styled from 'styled-components';
import { Button } from '../../button';
import { Typography } from '../../typography';

export const SigninWrapper = styled.div`
    position: relative;
`;

export const NotAccount = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Account = styled.div`
    font-family: 'PT Root UI bold';
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.46px;
    color: var(--primary-main);
    cursor: pointer;

    & svg {
        margin-right: 8px;
    }
`;

export const SigninBtn = styled(Button)`
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.46px;
    color: var(--primary-main);
    border: solid 1px var(--secondary-main);
    padding: 17px 20px;
    border-radius: 16px;

    & svg {
        margin-right: 8px;
    }
`;

interface IExpandLinksListWrapperProps {
  open: boolean;
}

export const ExpandLinksListWrapper = styled.div<IExpandLinksListWrapperProps>`
    position: absolute;
    width: 251px;
    top: -10px;
    left: -127px;
    border-radius: 16px;
    background: var(--grey-0);
    box-shadow: var(--shadow);
    z-index: 100;
    overflow: hidden;
    height: 0px;
    transition: height 0.3s ease-in-out, padding 0.1s linear 0.25s;

    ${({ open }) =>
            open &&
            `
    transition: height 0.3s ease-in-out 0.15s, padding 0.1s linear 0.1s;
    padding: 12px;
    height: 320px;
  `}
`;

export const LinksList = styled.ul`
    margin-top: 32px;

    & li:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color fontWeight 0.1s ease-in-out;

    & svg {
        margin-right: 16px;
    }
`;

export const ListItemTypography = styled(Typography)`
    color: var(--grey-1000);
`;
