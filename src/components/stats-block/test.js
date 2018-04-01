import React from 'react';
import {render} from 'enzyme';
import StatsBlock from './';

const props = {
    type: 'StatsBlock',
    __typename: 'ContentfulStatsBlock',
    id: 'c63nWfqQ4Ew0qwiu6kQCgkk',
    stats: [
        {
            name: 'Client',
            value: 'Google'
        },
        {
            name: 'Role',
            value: 'Ass, Creative Director'
        },
        {
            name: 'Agency',
            value: '+rehab studio'
        }
    ]
};

describe('StatsBlock component', () => {
    it('should render', () => {
        const el = render((
            <StatsBlock {...props}/>
        ));
        expect(el).toMatchSnapshot();
    });
});
