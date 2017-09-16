export class TodoData {
  constructor(public id: number,
              public title: string,
              public submitUser: string,
              public createDate: string) {
  }
}
export class TodoObjData {
  constructor(public total: number, public todoList: Array<TodoData>) {
  }
}
