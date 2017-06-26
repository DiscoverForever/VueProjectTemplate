import AV from 'leancloud-storage';
export class TestBase extends AV.Object {
  set name(name) {
    this.set('name', name);
  }

  get name() {
    return this.get('name');
  }
}

export class TestQueryBase extends AV.Query {
  constructor() {
    super('Test');
  }
}
AV.Object.register(TestBase);
