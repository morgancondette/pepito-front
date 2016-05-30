import angular from 'angular';

// dependencies
import GalleryConfig from './gallery.config';
import GalleryController from './gallery.controller';

// export module
export default angular.module('gallery', [])
  .config(GalleryConfig)
  .controller('GalleryController', GalleryController);
