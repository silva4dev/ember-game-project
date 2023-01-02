import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class HomeController extends Controller {
  @service('game') http;

  @action
  async deleteGame(id) {
    try {
      await this.http.delete(id);
      document.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  }
}
