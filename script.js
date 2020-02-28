let todoList = {
  todos: [],
  displayTodos: function () {
    console.log('My todos:', this.todos)
  },

  addTodo: function(todoText) { // todoText ist ein parameter Bsp.'hi'
    this.todos.push({
      todoText: todoText, // dann würde hier 'hi' stehen
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function (position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },

  deleteTodo: function (position) {
    this.todos.splice(position, 1)
    this.displayTodos();
  }

};
