import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiRouterTitle from 'angular-ui-router-title';
import noteComponent from './note.component';

let noteModule = angular.module('note', [
  uiRouter,
  'ui.router.title'
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('note', {
      parent: 'notes',
      url: '^/notes/{id:[0-9]{1,9}}',
      resolve: {
        $title: function($stateParams) {
          return {
            title: 'Text ' + $stateParams.id,
            url: 'http://joegatt.net/notes/' + $stateParams.id
          };
        }
      },
      views: {
        '@' : {
          template: '<note></note>'
        }
      }
    });
})

.component('note', noteComponent);

export default noteModule;
