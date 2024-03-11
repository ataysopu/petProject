import styled from 'styled-components';
import { mediaQueries } from '../../core/config/breakpoints';

export const Geolocation = styled.div`
    display: flex;
    align-items: center;
    padding-left: 22px;
`;

export const City = styled.div`
    color: var(--primary-main);
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;

    & svg {
        margin-right: 8px;
    }

    ${mediaQueries('lg')`
    display: none;
  `};
`;

export const Overlay = styled.div`
    position: absolute;
    z-index: 8;

    ${mediaQueries('lg')`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(2,2,2, 0.3);
  `};
`;

// export const Tooltip = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding: 24px 24px 20px 24px;
//     background: var(--grey-0);
//     max-width: 416px;
//     min-width: 416px;
//     width: 100%;
//     position: absolute;
//     top: 44px;
//     left: -21px;
//     border-radius: 12px;
//     transition: transform 0.35s ease;
//     transition: opacity 0.35s ease;
//     animation: fadein 0.35s ease;
//     touch-action: manipulation;
//     cursor: pointer;
//     filter: drop-shadow(var(--shadow));
//
//     &:after {
//         position: absolute;
//         content: '';
//         top: -30px;
//         left: 40px;
//         width: 0;
//         height: 0;
//         border-left: 30px solid transparent;
//         border-right: 30px solid transparent;
//         border-bottom: 30px solid var(--grey-0);
//
//         ${mediaQueries('lg')`
//       display: none;
//     `};
//     }
//
//     @keyframes fadein {
//         from {
//             opacity: 0;
//         }
//         to {
//             opacity: 1;
//         }
//     }
//
//     ${mediaQueries('lg')`
//     bottom: 0;
//     right: 0;
//     left: 0;
//     top: auto;
//     max-width:100%;
//     min-width: 0;
//     animation: slideDown 0.35s ease;
//     transition: transform 0.35s ease;
//     border-radius: 12px 12px 0 0;
//     touch-action: none
//
//     &:before {
//       position: absolute;
//       content: '';
//       top: 8px;
//       width: 40px;
//       height: 4px;
//       z-index: 20;
//       background: red;
//       left: 50%;
//       transform: translateX(-50%);
//       border-radius: 5px;
//       background: var(--grey-200);
//   `};
//
//     @keyframes slideDown {
//         from {
//             transform: translateY(100%);
//         }
//         to {
//             transform: translateY(0);
//         }
//     }
// `;

export const Tooltip = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 24px 20px 24px;
    background: var(--grey-0);
    max-width: 416px;
    min-width: 416px;
    width: 100%;
    position: absolute;
    top: 44px;
    left: -21px;
    border-radius: 12px;
    transition: transform 0.35s ease, opacity 0.35s ease;
    animation: fadein 0.35s ease;
    touch-action: manipulation;
    cursor: pointer;
    filter: drop-shadow(var(--shadow));

    &:after {
        position: absolute;
        content: '';
        top: -30px;
        left: 40px;
        width: 0;
        height: 0;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-bottom: 30px solid var(--grey-0);

        ${mediaQueries('lg')`
            display: none;
        `}
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    ${mediaQueries('lg')`
        bottom: 0;
        right: 0;
        left: 0;
        top: auto;
        max-width: 100%;
        min-width: 0;
        animation: slideDown 0.35s ease;
        transition: transform 0.35s ease;
        border-radius: 12px 12px 0 0;
        touch-action: none;

        &:before {
            position: absolute;
            content: '';
            top: 8px;
            width: 40px;
            height: 4px;
            z-index: 20;
            background: red;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 5px;
            background: var(--grey-200);
        }
    `} @keyframes slideDown {
    from {
        transform: translateY(100%);
    }

    to {
        transform: translateY(0);
    }
}
`;

export const Title = styled.div`
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.15px;
    color: var(--grey-1000);
    margin-bottom: 8px;
`;

export const Text = styled.div`
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: var(--grey-400);
    margin-bottom: 16px;
`;

export const ButtonsCover = styled.div`
    display: flex;
    align-items: center;
`;
