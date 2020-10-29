const Todo = require('../models/Todo');

// Methode appelée lors d'une requete GET sur /todos
exports.getTodo = async (request, response, next) => {
  try {
    const todos = await Todo.fetchAll();
    return response.render('todos', { todos });
  } catch (e) {
    console.error(e);
  }
};

// Methode appelée lors d'une requete POST sur /todos
exports.postAddTodo = async (request, response, next) => {
  try {
    const todo = new Todo(request.body.newTodo);
    const save = await todo.save();
    if (save)
      return response.redirect('/todos');
    throw 'Erreur lors de la sauvegarde'
  } catch (e) {
    console.error(e);
  }
};
