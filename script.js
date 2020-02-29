let todoList = {
  todos: [],
  displayTodos: function () {
    // debugger; --> stoppt an der Stelle um zu debuggen
    if (this.todos.length === 0) {
      console.log('Die Liste ist leer.')
    } else {
      console.log('My todos:');
      for (let i = 0; i < this.todos.length; i++) {
        console.log(this.todos[i].todoText);

        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText) { // todoText ist ein parameter Bsp.'hi'
    this.todos.push({
      todoText: todoText, // dann würde hier 'hi' stehen
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText; // todoText parameter wird wieder verwendet
    this.displayTodos();
  },

  deleteTodo: function (position) {
    this.todos.splice(position, 1)
    this.displayTodos();
  },

  toggleCompleted: function (position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;  // gegenteil von ist-zustand von todo.completed
    this.displayTodos();
  },

  toggleAll: function () {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }

    this.displayTodos();
  }
};

// Unschöne (lange) Variante:

// let displayTodosButton = document.getElementById('displayTodosButton');
// let toggleAllButton = document.getElementById('toggleAllButton');

// // Aktiviere displayTodos Methode wenn jemand den Todos anzeigen Button klickt

// displayTodosButton.addEventListener('click', function () {
//   todoList.displayTodos();
// });

// toggleAllButton.addEventListener('click', function () {
//   todoList.toggleAll();
// });

// Refactor – optimalere Lösung

let handlers = {
  displayTodos: function () {
    todoList.displayTodos();
  },
  toggleAll: function () {
    todoList.toggleAll();
  },
  addTodo: function () {
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: function () {
    let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value ='';
  }
};
