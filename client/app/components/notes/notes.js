import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiRouterTitle from 'angular-ui-router-title';
import notesComponent from './notes.component';

let notesModule = angular.module('notes', [
  uiRouter,
  'ui.router.title'
])

// Get name of route from config (here 'texts' instead of 'notes')
.config(($stateProvider) => {
  $stateProvider
    .state('notes', {
      parent: 'home',
      url: '^/notes?{p:int}',
      params: {
        p: {
          value: 1,
          squash: true
        }
      },
      resolve: {
        $title: function() { return 'Texts'; }
      },
      views: {
        '@' : {
          template: '<notes></notes>'
        }
      }
    });
})

.directive('notes', notesComponent);

export default notesModule;
