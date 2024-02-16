import styled from 'styled-components';
import { Button } from '../../components/button';

export const GoToWishlistBtn = styled(Button)<any>`
    position: relative;
    border-radius: 8px;
    border: solid 1px transparent;

    &::after {
        position: absolute;
        content: '${(props) => props.count}';
        visibility: ${(props) => (props.count ? 'initial' : 'hidden')};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary-main);
        border: solid 1px var(--grey-0);
        font-weight: 500;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: 0.14px;
        color: var(--grey-0);
        display: flex;
        align-items: center;
        justify-content: center;
        top: -1px;
        right: -1px;
    }
`;
