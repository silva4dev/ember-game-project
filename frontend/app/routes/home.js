import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class HomeRoute extends Route {
  @service('game') http;

  async model() {
    const games = await this.http.get();
    const response = games.data;
    return response;
  }
}
