import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class RegisterGameController extends Controller {
  @tracked gameName = '';
  @tracked gameDescription = '';

  @service('game') http;
  @service router;

  @action
  async addGame() {
    try {
      await this.http.post({
        name: this.gameName,
        description: this.gameDescription,
      });
      this.gameName = '';
      this.gameDescription = '';
      this.router.transitionTo('home');
    } catch (err) {
      console.log(err);
    }
  }
}
