import {css} from 'styled-components';
import {easings} from './easings';
import {colors} from './colors';

const colorTransitionDuration = 0.4;
const lineTransitionDuration = 0.6;
const lineEase = easings.easeOutQuad;

export const LinkHover = css`
    background-image: linear-gradient(${colors.grey}, ${colors.grey});
    background-position: 50% 1.15em;
    background-repeat: no-repeat;
    background-size: 100% 1px;
    margin-bottom: -0.6em;
    padding-bottom: 0.6em;
    position: relative;
    transition:
        color ${colorTransitionDuration}s linear,
        background-size ${lineTransitionDuration}s ${lineEase};

    &:hover,
    &.active {
        background-size: 0% 1px;
    }
`;

export const LinkHoverIntro = css`
    background-image: linear-gradient(${colors.black}, ${colors.black});
    background-position: 50% 1.15em;
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
