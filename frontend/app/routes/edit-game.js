import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import RSVP from 'rsvp';

export default class EditGameRoute extends Route {
  @service('game') http;
  @tracked gameName = '';
  @tracked gameDescription = '';
  @tracked gameId = 0;

  async model(params) {
    const games = await this.http.get();
    const response = games.data;
    response.forEach((data) => {
      if (data.id == params.id) {
        this.gameId = data.id;
        this.gameName = data.name;
        this.gameDescription = data.description;
      }
    });
    return RSVP.hash({
      gameId: this.gameId,
      gameName: this.gameName,
      gameDescription: this.gameDescription,
    });
  }
}
