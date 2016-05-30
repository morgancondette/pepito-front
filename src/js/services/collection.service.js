export default class Collection {
  constructor($http) {
    'ngInject';

    this.collections = {};
    this._$http = $http;
  }

  getCollections() {
    return this._$http({
      url: `/fixtures/collections.json`,
      method: 'GET'
    }).then((res) => res.data);
  }

  getCollection(slug) {
    let collection = {
        "_id": "573b6305070779a7e0dfd3d4",
        "index": 7,
        "cover": "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-375019.jpg",
        "title": "Kangle",
        "created": "2016-01-16T11:41:09 +05:00",
        "visible": true,
        "homefeatured": true,
        "description": "Velit excepteur velit voluptate veniam deserunt ea duis. Ipsum ipsum proident aliquip est voluptate laboris magna velit irure velit minim laboris. Fugiat laboris labore fugiat minim Lorem sunt minim ut non tempor anim pariatur cupidatat. Eiusmod aliqua aute elit adipisicing ad laborum dolore ut est aliquip ipsum non non aute.\r\n",
        "slug": "kangle"
      };

      return collection;
  }
}
