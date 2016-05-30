import angular from 'angular';

// dependencies
import CollectionService from './collection.service';
import PhotoService from './photo.service';
import UserService from './user.service';

// export module
export default angular.module('services', [])
  .service('Collection', CollectionService)
  .service('Photo', PhotoService)
  .service('User', UserService);
