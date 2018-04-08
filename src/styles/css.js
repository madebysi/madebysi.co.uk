import {css} from 'styled-components';
import {colors} from './colors';

export const LinkHoverIntro = css`
    background-image: linear-gradient(${colors.black}, ${colors.black});
    background-position: 50% 0.9em;
    background-repeat: no-repeat;
    background-size: 100% 1px;
    margin-bottom: -0.6em;
    padding-bottom: 0.6em;
    position: relative;
    transition:
        color 0.1s linear,
        background-image 0.1s linear;

    &:hover,
    &.active {
        color: ${colors.white};
        background-image: linear-gradient(${colors.white}, ${colors.white});
    }
`;

export const LinkHoverIntroReg = css`
    ${LinkHoverIntro}
    background-image: linear-gradient(${colors.greyDark}, ${colors.greyDark});
    background-position: 50% 1.15em;
`;
