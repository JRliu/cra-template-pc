import { makeAutoObservable } from 'mobx';

class PersonStore {
    constructor() {
        makeAutoObservable(this);
    }

    name = 'tony';

    toggelName() {
        this.name = this.name === 'tony' ? 'amy' : 'tony';
    }
}

export default new PersonStore();
