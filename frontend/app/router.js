import EmberRouter from '@ember/routing/router';
import config from 'frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('register-game', { path: '/cadastrar' });
  this.route('not-found', { path: '*path' });
  this.route('edit-game', { path: '/editar/:id' });
});
