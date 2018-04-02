import React from 'react';
import {render} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import {LinkStub} from '../../../test/helpers';
import WorkMenu from './';

const props = {
    type: 'ContentfulWorkLinks',
    __typename: 'ContentfulWorkLinks',
    pages: [
        {
            id: 'c6kSeeWCYTKUQoUk80AKwie',
            title: 'Den',
            slug: 'den',
            hoverMedia: {
                id: 'c27lZOddnogacCegumOu6Uy',
                title: '1-den-loop',
                description: '',
                file: {
                    url: '//videos.ctfassets.net/ro18aj2mntol/27lZOddnogacCegumOu6Uy/8b0c71a5629ff538dc0dce200eb51486/1-den-loop.mp4',
                    fileName: '1-den-loop.mp4',
                    contentType: 'video/mp4'
                }
            }
        },
        {
            id: 'c5izWuTc7rOisoqa2kGQKQW',
            title: 'Google',
            slug: 'google-digital-garage',
            hoverMedia: {
                id: 'c4ll83G1HOgoUMOagM6eu4y',
                title: '2-google',
                description: '',
                file: {
                    url: '//videos.ctfassets.net/ro18aj2mntol/4ll83G1HOgoUMOagM6eu4y/b7fdd2ecdc8d2b70cb8410eaa8291247/2-google.mp4',
                    fileName: '2-google.mp4',
                    contentType: 'video/mp4'
                }
            }
        },
        {
            id: 'c4NUc8d1RoQUC2ew0S0gsmA',
            title: 'BeatsByDre',
            slug: 'beatsbydre',
            hoverMedia: {
                id: 'c3kvxJ7P69qQaIISUeGsKuk',
                title: '3-beatsbydre',
                description: '',
                file: {
                    url: '//images.ctfassets.net/ro18aj2mntol/3kvxJ7P69qQaIISUeGsKuk/48f242a03bffc13596671fdafc6f2e62/3-beatsbydre.jpg',
                    fileName: '3-beatsbydre.jpg',
                    contentType: 'image/jpeg'
                }
            }
        },
        {
            id: 'c6pLjIiX2N2KgiSaE4YCQKC',
            title: 'Mazda',
            slug: 'mazda',
            hoverMedia: {
                id: 'c6Md5OCBYys0iYQSeKGckQS',
                title: '4-mazda-loop',
                description: '',
                file: {
                    url: '//videos.ctfassets.net/ro18aj2mntol/6Md5OCBYys0iYQSeKGckQS/7aba48b1c7863ca112cf3d94a5d28f32/4-mazda-loop.mp4',
                    fileName: '4-mazda-loop.mp4',
                    contentType: 'video/mp4'
                }
            }
        },
        {
            id: 'c3OpgqfsgMEQqgWeqiSK6qY',
            title: 'Samsung',
            slug: 'samsung',
            hoverMedia: {
                id: 'c2fku7IR56sQqiqoAYoGYIS',
                title: '5-samsung',
                description: '',
                file: {
                    url: '//images.ctfassets.net/ro18aj2mntol/2fku7IR56sQqiqoAYoGYIS/e89c41ccb18cbd6a64302ab284caac5b/5-samsung.jpg',
                    fileName: '5-samsung.jpg',
                    contentType: 'image/jpeg'
                }
            }
        },
        {
            id: 'c49HibswOrusEcUsaiEOiqk',
            title: 'Honda',
            slug: 'honda',
            hoverMedia: {
                id: 'c1dvKRNfXfCmSEeqEqOWqGU',
                title: '6-honda',
                description: '',
                file: {
                    url: '//images.ctfassets.net/ro18aj2mntol/1dvKRNfXfCmSEeqEqOWqGU/140a220e6561cf6d335b3e145aebc1ca/6-honda.jpg',
                    fileName: '6-honda.jpg',
                    contentType: 'image/jpeg'
                }
            }
        },
        {
            id: 'c1jcLfnsZpIY4GWAmaoEq8S',
            title: 'Live Cases',
            slug: 'live-cases',
            hoverMedia: {
                id: 'c1b3UkaiesYoCAmQYI8e8mC',
                title: '7-live-cases',
                description: '',
                file: {
                    url: '//videos.ctfassets.net/ro18aj2mntol/1b3UkaiesYoCAmQYI8e8mC/52e71f950256d869cbf93886b88eb2ca/7-live-cases.mp4',
                    fileName: '7-live-cases.mp4',
                    contentType: 'video/mp4'
                }
            }
        }
    ]
};

describe('Work Links component', () => {
    it('should render', () => {
        const el = render((
            <MemoryRouter>
                <WorkMenu
                    {...props}
                    LinkComponent={LinkStub}
                />
            </MemoryRouter>
        ));
        expect(el).toMatchSnapshot();
    });
});
