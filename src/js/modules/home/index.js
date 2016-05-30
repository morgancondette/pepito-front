import angular from 'angular';

// dependencies
import HomeController from './home.controller';
import HomeConfig from './home.config';

// export module
export default angular.module('home', ['services'])
  .config(HomeConfig)
  .controller('HomeController', HomeController);
