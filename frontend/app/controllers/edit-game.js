import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class EditGameController extends Controller {
  @service('game') http;
  @service router;

  @action
  async editGame(id) {
    try {
      await this.http.put(id, {
        name: this.model.gameName,
        description: this.model.gameDescription,
      });
      this.router.transitionTo('home');
    } catch (err) {
      console.log(err);
    }
  }
}
