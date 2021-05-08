import { makeAutoObservable } from 'mobx';
import auth from './auth';
import person from './person';

class Store {
    constructor() {
        makeAutoObservable(this);
    }

    personStore = person;

    authStore = auth;

    toggelName() {
        this.personStore.name =
            this.personStore.name === 'tony' ? 'amy' : 'tony';
    }
}

export default new Store();
