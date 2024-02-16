import styled from 'styled-components';
import { mediaQueries } from '../../core/config/breakpoints';

export const BannerCover = styled.div`
    margin: 80px 0;
    width: 100%;
    display: block;
    height: 152px;
    background: var(--grey-0);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: var(--shadow);

    ${mediaQueries('lg')`
    margin-top:0;
    height: 64px;
  `}
`;

export const Image = styled.a`
    ${mediaQueries('lg')`
    svg {
      height: 24px;
      max-width: 100px;
    }
  `}
`;

//Banner Price
export const BannerPriceCover = styled.div`
    display: flex;
    gap: 16px;
    margin: 80px 0;

    ${mediaQueries('lg')`
    flex-direction: column;
    align-items: center;
    gap: 48px;
    margin: 0;
    margin-bottom: 48px;
  `}
`;

export const Poster = styled.a`
    display: flex;
    align-items: center;
    background: linear-gradient(98.85deg, #e7e6eb -17.5%, rgba(142, 134, 203, 0.3) 99.99%, #e7e6eb 100%);
    width: 100%;
    height: 200px;
    border-radius: 12px;
    position: relative;
    cursor: pointer;
    padding: 32px 40px;

    ${mediaQueries('sm')`
    max-width: 343px;
    height: 372px;
    flex-direction: column;
    justify-content: flex-end;
    padding: 40px 24px;
  `}
`;

interface ITextBoxProps {
  bg?: string;
}

export const TextBox = styled.div<ITextBoxProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h6 {
        font-family: 'PT ROOT UI medium';
        border-radius: 8px;
        padding: 2px 8px;
        font-weight: 500;
        font-size: 12px;
        line-height: 157%;
        letter-spacing: 0.1px;
        color: var(--grey-0);
        display: inline-block;
        margin-bottom: 12px;
        background: var(${({ bg }) => (bg === 'main' ? '--primary-main' : '--error-main')});
    }

    span {
        font-family: 'Fira Sans medium';
        font-family: inherit;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: var(--grey-850);
        max-width: 255px;
    }
`;

export const Img = styled.img`
    position: absolute;
    right: 0;

    ${mediaQueries('lg')`
    top:-45px;
  `}

    ${mediaQueries('sm')`
    width: 100%;
  `}
`;
