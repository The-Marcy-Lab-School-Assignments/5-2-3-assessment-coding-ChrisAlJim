const { getId } = require('./utils');

class ToDoItem {
  constructor(description, priorityLevel, dueDate = "today") {
    this.description = description
    this.priorityLevel = priorityLevel
    this.id = getId();
    this.isDone = false
    this.dueDate = dueDate
  }

  getDueDate() {
    console.log(this.dueDate)
    return this.dueDate
  }
}


class ToDoList {
  #items = []
  static #lists = []
  
  constructor(name) {
    this.name = name
    this.id = getId();
    this.owner = "You silly"
    ToDoList.#lists.push(this)
  }

  createItem(description, priorityLevel) {
    const item = new ToDoItem(description, priorityLevel)
    this.#items.push(item)
    return item
  }

  getItems() {
    return [...this.#items]
  }

  getCompletedCount() {
    let completed = 0
    this.#items.forEach(item => {
      if (item.isDone === true) {
        completed ++
      }
    })
    return completed
  }

  getOwner() {
    return this.owner
  }

  static toEqual() {

  }

  static list() {
    return [...ToDoList.#lists]
  }

  static findBy(id) {
    return ToDoList.#lists.find(list => list.id === id)
  }
}

module.exports = {
  ToDoItem,
  ToDoList
};