import { makeAutoObservable } from 'mobx';

class AuthStore {
    constructor() {
        makeAutoObservable(this);
    }

    authed = false;

    login() {
        this.authed = true;
    }

    logout() {
        this.authed = false;
    }
}

export default new AuthStore();
