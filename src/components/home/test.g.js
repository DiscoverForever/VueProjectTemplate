import AV from 'leancloud-storage';
export class TestBase extends AV.Object {
  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

export class TestQueryBase extends AV.Query {
  constructor() {
    super('Test');
  }
}
AV.Object.register(TestBase);
