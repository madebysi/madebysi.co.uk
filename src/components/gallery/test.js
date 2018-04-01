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
                base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAALCAALABQBAREA/8QAGAAAAgMAAAAAAAAAAAAAAAAAAgMFBgj/xAAnEAACAQIEBQUBAAAAAAAAAAABAgMEEQAFBiESExQjMRUiJEFRgf/aAAgBAQAAPwDa2oNTvl+dJQRV1NBK0Yk5U8Lm4JIHcHtUkiwBuSfo3xD51qvN6QO3WUdMnOMa8HG7XVGZgeyfAU72sbfzF6oDMaOLqGR5wLO0ZupIO9sHLSwzG8kMch/WUHAenUu/xodxY9sbjD0RY1CqoVR4AFgMf//Z',
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
                base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAALCAALABQBAREA/8QAGAAAAgMAAAAAAAAAAAAAAAAAAgMFBgj/xAAnEAACAQIEBQUBAAAAAAAAAAABAgMEEQAFBiESExQjMRUiJEFRgf/aAAgBAQAAPwDa2oNTvl+dJQRV1NBK0Yk5U8Lm4JIHcHtUkiwBuSfo3xD51qvN6QO3WUdMnOMa8HG7XVGZgeyfAU72sbfzF6oDMaOLqGR5wLO0ZupIO9sHLSwzG8kMch/WUHAenUu/xodxY9sbjD0RY1CqoVR4AFgMf//Z',
                aspectRatio: 1.7777777777777777,
                src: '//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=800&q=100&fm=webp',
                srcSet: '//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=200&h=113&q=100&fm=webp 200w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=400&h=225&q=100&fm=webp 400w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=800&h=450&q=100&fm=webp 800w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=1200&h=675&q=100&fm=webp 1200w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=1600&h=900&q=100&fm=webp 1600w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=1920&h=1080&q=100&fm=webp 1920w',
                srcWebp: '//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=800&q=100&fm=webp',
                srcSetWebp: '//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=200&h=113&q=100&fm=webp 200w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=400&h=225&q=100&fm=webp 400w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=800&h=450&q=100&fm=webp 800w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=1200&h=675&q=100&fm=webp 1200w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=1600&h=900&q=100&fm=webp 1600w,\n//images.ctfassets.net/ro18aj2mntol/6oPprg2UmcEcumiqK2OAQI/440fbdcc86f2ad1ca0d2a1b2b1fe5e3b/4-google-detail-1.jpg?w=1920&h=1080&q=100&fm=webp 1920w',
                sizes: '(max-width: 800px) 100vw, 800px'
            },
            resize: {
                base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAALCAALABQBAREA/8QAGAAAAgMAAAAAAAAAAAAAAAAAAgMFBgj/xAAnEAACAQIEBQUBAAAAAAAAAAABAgMEEQAFBiESExQjMRUiJEFRgf/aAAgBAQAAPwDa2oNTvl+dJQRV1NBK0Yk5U8Lm4JIHcHtUkiwBuSfo3xD51qvN6QO3WUdMnOMa8HG7XVGZgeyfAU72sbfzF6oDMaOLqGR5wLO0ZupIO9sHLSwzG8kMch/WUHAenUu/xodxY9sbjD0RY1CqoVR4AFgMf//Z',
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
                base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAALABQDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAABAcFBgj/xAAkEAABBAEEAgIDAAAAAAAAAAABAgMEEQUAEiEiBkETFDEzcf/EABgBAAMBAQAAAAAAAAAAAAAAAAIEBQYD/8QAJREAAgECBQQDAQAAAAAAAAAAAQIDABEEEiExQRMyUXEiscGh/9oADAMBAAIRAxEAPwDb3kGZaj5eFjno73wOtrfemtrUgR0pqgSBZ3EkUDfH40hPKyuEW/m4v91YwOGDI05yngAgH+E0HkWGnvpzseZRjNrajoZiyQgBAUoBW1YJoBxVm7IHutHFFDOrGV8pG2l76ebj9qXilxcEydFSw5tYbnXTKdvYq2hW8BVVfNaZTtFCwsxFROdiMuqbkKbSp9hKvicrsjdwaPqxroQMhbkUUbsGycHel/5Tk5ULJRMcy+pMRcV7cg8nq2jb2Pb2feo0xPXVeLfgrW4RQcE8tvkD9k8bU1W/1p/g1WXYVkpO9vdf/9k=',
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
                base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAALABQDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAABAcFBgj/xAAkEAABBAEEAgIDAAAAAAAAAAABAgMEEQUAEiEiBkETFDEzcf/EABgBAAMBAQAAAAAAAAAAAAAAAAIEBQYD/8QAJREAAgECBQQDAQAAAAAAAAAAAQIDABEEEiExQRMyUXEiscGh/9oADAMBAAIRAxEAPwDb3kGZaj5eFjno73wOtrfemtrUgR0pqgSBZ3EkUDfH40hPKyuEW/m4v91YwOGDI05yngAgH+E0HkWGnvpzseZRjNrajoZiyQgBAUoBW1YJoBxVm7IHutHFFDOrGV8pG2l76ebj9qXilxcEydFSw5tYbnXTKdvYq2hW8BVVfNaZTtFCwsxFROdiMuqbkKbSp9hKvicrsjdwaPqxroQMhbkUUbsGycHel/5Tk5ULJRMcy+pMRcV7cg8nq2jb2Pb2feo0xPXVeLfgrW4RQcE8tvkD9k8bU1W/1p/g1WXYVkpO9vdf/9k=',
                aspectRatio: 1.7777777777777777,
                src: '//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=800&q=100&fm=webp',
                srcSet: '//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=200&h=113&q=100&fm=webp 200w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=400&h=225&q=100&fm=webp 400w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=800&h=450&q=100&fm=webp 800w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=1200&h=675&q=100&fm=webp 1200w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=1600&h=900&q=100&fm=webp 1600w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=1920&h=1080&q=100&fm=webp 1920w',
                srcWebp: '//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=800&q=100&fm=webp',
                srcSetWebp: '//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=200&h=113&q=100&fm=webp 200w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=400&h=225&q=100&fm=webp 400w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=800&h=450&q=100&fm=webp 800w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=1200&h=675&q=100&fm=webp 1200w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=1600&h=900&q=100&fm=webp 1600w,\n//images.ctfassets.net/ro18aj2mntol/5tyecsr0hU0QyUUUugUMM8/528c120fbed1535f392f9b20cbf913d6/4-google-detail-2.jpg?w=1920&h=1080&q=100&fm=webp 1920w',
                sizes: '(max-width: 800px) 100vw, 800px'
            },
            resize: {
                base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAALABQDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAABAcFBgj/xAAkEAABBAEEAgIDAAAAAAAAAAABAgMEEQUAEiEiBkETFDEzcf/EABgBAAMBAQAAAAAAAAAAAAAAAAIEBQYD/8QAJREAAgECBQQDAQAAAAAAAAAAAQIDABEEEiExQRMyUXEiscGh/9oADAMBAAIRAxEAPwDb3kGZaj5eFjno73wOtrfemtrUgR0pqgSBZ3EkUDfH40hPKyuEW/m4v91YwOGDI05yngAgH+E0HkWGnvpzseZRjNrajoZiyQgBAUoBW1YJoBxVm7IHutHFFDOrGV8pG2l76ebj9qXilxcEydFSw5tYbnXTKdvYq2hW8BVVfNaZTtFCwsxFROdiMuqbkKbSp9hKvicrsjdwaPqxroQMhbkUUbsGycHel/5Tk5ULJRMcy+pMRcV7cg8nq2jb2Pb2feo0xPXVeLfgrW4RQcE8tvkD9k8bU1W/1p/g1WXYVkpO9vdf/9k=',
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
