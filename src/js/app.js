import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';

// import app config files
import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import appRun     from './config/app.run';
import 'angular-ui-router';

// import generated templates file
import './config/app.templates';

// import services
import './services';

// import app features
import './modules/home';
import './modules/gallery';

// main module dependencies
const requires = [
  'ngMaterial',
  'ui.router',
  'templates',
  'home',
  'gallery',
  'services'
];

// angular main module
let app = angular.module('app', requires)
         .constant('AppConstants', constants)
         .config(appConfig)
         .run(appRun);

// application boostrap
angular.bootstrap(document, ['app'], {
  strictDi: true // see doc for more info
});
