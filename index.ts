import { deleteTodo, deleteUser } from "./src/deleteData";
import { getUsers, getTodos } from "./src/getData";
import { Todos, Users, insertTodo, insertUser } from "./src/insertData";
import { updateUsers, updateTodos, User, Todo } from "./src/updateData";

const userDetails: Users = {
  username: "test",
  email: "test2@mail.com",
  password: "123456789",
};

const todoDetails: Todos = {
  title: "test title2",
  description: "test desc2",
  userId: 1,
};

const updateUser: User = {
  userId: 1,
  username: "raj",
};

const todoUpdate: Todo = {
  todoId: 1,
  done: true,
};

// insertTodo(todoDetails);
// insertUser(userDetails);

// getUsers();
// getTodos();

// updateUsers(updateUser);
// updateTodos(todoUpdate);

// deleteUser(2);
// deleteTodo(4);
