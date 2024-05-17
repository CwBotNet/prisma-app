import { client } from "../utils/client";

export interface User {
  userId: number;
  username?: string;
  email?: string;
  password?: string;
}

export interface Todo {
  todoId: number;
  title?: string;
  description?: string;
  done?: boolean;
  userId?: number;
}

async function updateUsers(user: User) {
  const response = await client.user.update({
    where: {
      id: user.userId,
    },
    data: {
      username: user.username,
    },
  });
  console.log(response);
  return response;
}
async function updateTodos(todo: Todo) {
  const response = await client.todo.update({
    where: {
      id: todo.todoId,
    },
    data: {
      done: todo.done,
    },
  });
  console.log(response);
  return response;
}

export { updateUsers, updateTodos };
