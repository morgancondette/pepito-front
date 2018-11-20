import * as React from 'react';

import DefaultTemplate from 'templates/default-template';
import Gallery from 'components/gallery';

const stubGallery = [
  {
    caption: 'Wildlife',
    id: '5beb0fe43c45d8ca39a5f0cf',
    image:
      'https://scontent-dfw5-1.cdninstagram.com/vp/51b584beebbcf5a137a0be97a8110d2a/5C886FD8/t51.2885-15/e35/37889844_2058232621108666_614718139132805120_n.jpg',
    isActive: true,
    title: 'culpa'
  },
  {
    id: '5beb0fe48d740f02b453c0b8',
    image:
      'https://scontent-dfw5-1.cdninstagram.com/vp/0a4ef0537b66fc8947a9c83aa063e041/5C7CEB20/t51.2885-15/e35/37394681_1325265460941857_6418439233547010048_n.jpg',
    isActive: false,
    title: 'portrait'
  },
  {
    id: '5beb0fe4b776eaceacfd543a',
    image:
      'https://scontent-dfw5-1.cdninstagram.com/vp/2f5d1ef511a1295af40e2e4df44969af/5C820B28/t51.2885-15/e35/37424169_255028671776289_5715666594034614272_n.jpg',
    isActive: true,
    title: 'culpa'
  },
  {
    caption: 'Portraits',
    id: '5beb0fe4913edcce80a588fb',
    image:
      'https://scontent-dfw5-1.cdninstagram.com/vp/532a46d452c0d804a30b7816f2bfc8ab/5C66667E/t51.2885-15/e35/22638990_228512774216490_8234487621183602688_n.jpg',
    isActive: true,
    title: 'eiusmod'
  },
  {
    id: '5beb0fe4bdc0a518467ea64a',
    image:
      'https://scontent-dfw5-1.cdninstagram.com/vp/2bbc189e2d815bead19e704da242c4c2/5C6DC1CE/t51.2885-15/e35/20686496_466135833763284_4115877897175040000_n.jpg',
    isActive: true,
    title: 'veniam'
  },
  {
    id: '5beb0fe4d40f05c141d722ff',
    image:
      'https://scontent-dfw5-1.cdninstagram.com/vp/fc74dcd836ccdd87c5359e7af9d7afde/5C883787/t51.2885-15/e35/28154216_216367255580466_8577716664173330432_n.jpg',
    isActive: false,
    title: 'labore'
  }
];

class GalleryPage extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <DefaultTemplate>
        <Gallery galleryItems={stubGallery} itemsPerRow={2} />
      </DefaultTemplate>
    );
  }
}

export default GalleryPage;
