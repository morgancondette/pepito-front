export default class GalleryController {
  constructor(Collection) {
    'ngInject';

    this.pageTitle = 'Page galerie';


    Collection.getCollections().then(
      (collections) => this.collections = collections
    );
  }
}
