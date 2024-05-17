import { client } from "../utils/client";

export interface Users {
  username: string;
  password: string;
  email: string;
}

export interface Todos {
  title: string;
  description: string;
  done?: boolean;
  userId: number;
}

async function insertUser(user: Users) {
  try {
    const result = await client.user.create({
      data: {
        username: user.username,
        email: user.email,
        password: user.password,
      },
    });

    console.log(result);
  } catch (error: any) {
    console.log(error?.message);
    return null;
  }
}

async function insertTodo(todo: Todos) {
  try {
    const response = await client.todo.create({
      data: {
        title: todo.title,
        description: todo.description,
        userId: todo.userId,
      },
    });

    console.log(response);
    return response;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
}

export { insertTodo, insertUser };
