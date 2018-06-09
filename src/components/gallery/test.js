import React from 'react';
import {render} from 'enzyme';
import Gallery from './';

const props = {
    type: 'ContentfulGallery',
    __typename: 'ContentfulGallery',
    id: 'c10Bpf3tyZ6S0IQccqumSCK',
    images: [
        {
            id: 'c6oPprg2UmcEcumiqK2OAQI',
            title: '4-google-detail-1',
            description: '',
            resolutions: {
                aspectRatio: 1.7777777777777777,
                width: 400,
                height: 225,
                src: '//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=400&q=50',
                srcSet: '//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=400&h=225&q=50 1x,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=600&h=338&q=50 1.5x,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=800&h=450&q=50 2x,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=1200&h=675&q=50 3x',
                srcWebp: '//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=400&q=50&fm=webp',
                srcSetWebp: '//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=400&h=225&q=50&fm=webp 1x,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=600&h=338&q=50&fm=webp 1.5x,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=800&h=450&q=50&fm=webp 2x,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=1200&h=675&q=50&fm=webp 3x'
            },
            file: {
                url: '//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg',
                fileName: '4-google-detail-1.jpg',
                contentType: 'image/jpeg'
            },
            sizes: {
                aspectRatio: 1.7777777777777777,
                src: '//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=800&q=100&fm=webp',
                srcSet: '//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=200&h=113&q=100&fm=webp 200w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=400&h=225&q=100&fm=webp 400w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=800&h=450&q=100&fm=webp 800w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=1200&h=675&q=100&fm=webp 1200w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=1600&h=900&q=100&fm=webp 1600w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=1920&h=1080&q=100&fm=webp 1920w',
                srcWebp: '//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=800&q=100&fm=webp',
                srcSetWebp: '//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=200&h=113&q=100&fm=webp 200w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=400&h=225&q=100&fm=webp 400w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=800&h=450&q=100&fm=webp 800w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=1200&h=675&q=100&fm=webp 1200w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=1600&h=900&q=100&fm=webp 1600w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=1920&h=1080&q=100&fm=webp 1920w',
                sizes: '(max-width: 800px) 100vw, 800px'
            },
            resize: {
                src: '//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=400&fl=progressive&q=50',
                width: 400,
                height: 225,
                aspectRatio: 1.7777777777777777
            }
        },
        {
            id: 'c5tyecsr0hU0QyUUUugUMM8',
            title: '4-google-detail-2',
            description: '',
            resolutions: {
                aspectRatio: 1.7777777777777777,
                width: 400,
                height: 225,
                src: '//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=400&q=50',
                srcSet: '//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=400&h=225&q=50 1x,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=600&h=338&q=50 1.5x,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=800&h=450&q=50 2x,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=1200&h=675&q=50 3x',
                srcWebp: '//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=400&q=50&fm=webp',
                srcSetWebp: '//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=400&h=225&q=50&fm=webp 1x,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=600&h=338&q=50&fm=webp 1.5x,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=800&h=450&q=50&fm=webp 2x,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=1200&h=675&q=50&fm=webp 3x'
            },
            file: {
                url: '//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg',
                fileName: '4-google-detail-2.jpg',
                contentType: 'image/jpeg'
            },
            sizes: {
                aspectRatio: 1.7777777777777777,
                src: '//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=800&q=100&fm=webp',
                srcSet: '//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=200&h=113&q=100&fm=webp 200w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=400&h=225&q=100&fm=webp 400w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=800&h=450&q=100&fm=webp 800w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=1200&h=675&q=100&fm=webp 1200w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=1600&h=900&q=100&fm=webp 1600w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=1920&h=1080&q=100&fm=webp 1920w',
                srcWebp: '//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=800&q=100&fm=webp',
                srcSetWebp: '//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=200&h=113&q=100&fm=webp 200w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=400&h=225&q=100&fm=webp 400w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=800&h=450&q=100&fm=webp 800w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=1200&h=675&q=100&fm=webp 1200w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=1600&h=900&q=100&fm=webp 1600w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=1920&h=1080&q=100&fm=webp 1920w',
                sizes: '(max-width: 800px) 100vw, 800px'
            },
            resize: {
                src: '//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=400&fl=progressive&q=50',
                width: 400,
                height: 225,
                aspectRatio: 1.7777777777777777
            }
        }
    ]
};

describe('Gallery component', () => {
    it('should render', () => {
        const el = render((
            <Gallery {...props}/>
        ));
        expect(el).toMatchSnapshot();
    });
});
