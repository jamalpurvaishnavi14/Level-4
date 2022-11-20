/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todo List,() => {
  beforeAll(() => {
    const yesterday = new Date();
    const lastday = 86400000;
    [
      {
        title: "watching movie",
        completed: false,
        dueDate: new Date(yesterday.getTime() - lastday).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "booking tickets",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "new assignment",
        completed: false,
        dueDate: new Date(today.getTime() + lastday).toLocaleDateString(
          "en-CA"
        ),
      },
    ].forEach(add);
  });
  test("newone", () => {
    expect(all.length).toEqual(3);
    add({
      title: "Go Buy thread",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test("a todo", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("overdue", () => {
    expect(overdue().length).toEqual(1);
  });

  test("retrieval of taday", () => {
    expect(dueToday().length).toEqual(2);
  });

  test("retreival of last", () => {
    expect(dueLater().length).toEqual(1);
  });
});