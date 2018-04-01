import React from 'react';
import {render} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import {LinkStub} from '../../../test/helpers';
import WorkLinks from './';

const props = {
    type: 'ContentfulWorkLinks',
    __typename: 'ContentfulWorkLinks',
    pages: [
        {
            id: 'c6kSeeWCYTKUQoUk80AKwie',
            title: 'Den',
            slug: 'den'
        },
        {
            id: 'c5izWuTc7rOisoqa2kGQKQW',
            title: 'Google',
            slug: 'google-digital-garage'
        },
        {
            id: 'c4NUc8d1RoQUC2ew0S0gsmA',
            title: 'BeatsByDre',
            slug: 'beatsbydre'
        },
        {
            id: 'c6pLjIiX2N2KgiSaE4YCQKC',
            title: 'Mazda',
            slug: 'mazda'
        },
        {
            id: 'c3OpgqfsgMEQqgWeqiSK6qY',
            title: 'Samsung',
            slug: 'samsung'
        },
        {
            id: 'c49HibswOrusEcUsaiEOiqk',
            title: 'Honda',
            slug: 'honda'
        },
        {
            id: 'c1jcLfnsZpIY4GWAmaoEq8S',
            title: 'Live Cases',
            slug: 'live-cases'
        }
    ],
    page: {
        id: 'c1jcLfnsZpIY4GWAmaoEq8S'
    }
};

describe('Work Links component', () => {
    it('should render', () => {
        const el = render((
            <MemoryRouter>
                <WorkLinks
                    {...props}
                    LinkComponent={LinkStub}
                />
            </MemoryRouter>
        ));
        expect(el).toMatchSnapshot();
    });
});
