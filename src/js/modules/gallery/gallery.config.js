export default function GalleryConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('gallery', {
    url: '/gallery',
    controller: 'GalleryController',
    controllerAs: '$ctrl',
    templateUrl: 'modules/gallery/gallery.html',
    title: 'Gallery Title'
  })
  .state('gallery-show', {
    url: '/gallery/:slug',
    controller: 'GalleryController',
    controllerAs: '$ctrl',
    templateUrl: 'modules/gallery/views/gallery-show.html',
    title: 'Gallery Title',
    resolve: {
      collection: {
          "_id": "573b6305070779a7e0dfd3d4",
          "index": 7,
          "cover": "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-375019.jpg",
          "title": "Kangle",
          "created": "2016-01-16T11:41:09 +05:00",
          "visible": true,
          "homefeatured": true,
          "description": "Velit excepteur velit voluptate veniam deserunt ea duis. Ipsum ipsum proident aliquip est voluptate laboris magna velit irure velit minim laboris. Fugiat laboris labore fugiat minim Lorem sunt minim ut non tempor anim pariatur cupidatat. Eiusmod aliqua aute elit adipisicing ad laborum dolore ut est aliquip ipsum non non aute.\r\n",
          "slug": "kangle"
        }
    }
  });
};
