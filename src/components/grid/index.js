import React, {Component} from 'react';
import styled from 'styled-components';
import {
    column,
    columnGutter,
    layoutWidthMd,
    maxSiteWidth,
    media,
    numColumns,
    siteMarginMd,
    siteMarginPercent,
    siteMarginPercentMd
} from '../../styles';
import array from 'usfl/array/array';
import roundTo from 'usfl/math/round-to';
import keyboard from 'usfl/input/keyboard';

const Grid = styled.div`
    display: ${props => props.isVisible ? 'block' : 'none'};
    padding: 0 ${siteMarginPercentMd}%;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    left: 50%;
    max-width: ${maxSiteWidth}px;
    transform: translate(-50%, 0px);
    z-index: 200;
    pointer-events: none;

    ${media.md`
        padding: 0 ${siteMarginPercentMd}%;
    `}
`;

const GridSm = styled.div`
    ${media.md`
        display: none;
    `}
`;

const GridMd = styled.div`
    width: 100%;
    display: none;
    ${media.md`
        display: block;
    `}
`;

const margin = siteMarginMd / layoutWidthMd;
const col = column / layoutWidthMd;
const gutter = columnGutter / layoutWidthMd;

const Line = styled.div`
    background: blue;
    width: 1px;
    position: absolute;
    top: 0;
    height: 100vh;
    left: ${({left}) => left}%;
`;

const linesMd = array(numColumns).reduce(acc => {
    const prev = acc[acc.length - 1];
    return acc.concat(prev + col, prev + col + gutter);
}, [0, margin]).slice(0, -1).concat(1);

const linesSm = [
    siteMarginPercent,
    siteMarginPercent * 2,
    100 - siteMarginPercent * 2,
    100 - siteMarginPercent
];

export default class GridComponent extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isVisible: false
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.toggle, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.toggle);
    }

    toggle(event) {
        if (event.keyCode === keyboard.G) {
            this.setState({isVisible: !this.state.isVisible});
        }
    }

    render() {
        return (
            <Grid isVisible={this.state.isVisible || this.props.show}>
                <GridMd>
                    {linesMd.map(left => <Line key={left} left={roundTo(left * 100, 1)}/>)}
                </GridMd>
                <GridSm>
                    {linesSm.map(left => <Line key={left} left={left}/>)}
                </GridSm>
            </Grid>
        );
    }
}
