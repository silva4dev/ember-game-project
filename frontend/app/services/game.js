import Service from '@ember/service';
import axios from 'axios';

export default class GameService extends Service {
  baseUrl = 'http://localhost:3001/games';

  get() {
    return axios.get(this.baseUrl);
  }

  post(data) {
    return axios.post(this.baseUrl, data);
  }

  delete(id) {
    return axios.delete(this.baseUrl + '/' + id);
  }

  put(id, data) {
    return axios.put(this.baseUrl + '/' + id, data);
  }
}
