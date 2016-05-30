export default function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'HomeController',
    controllerAs: '$ctrl',
    templateUrl: 'modules/home/home.html',
    title: 'Home Title'
  });
};
