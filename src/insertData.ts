import { client } from "../utils/client";

const userDetails: User = {
  username: "test",
  email: "test@mail.com",
  password: "123456789",
};

const todoDetails: Todo = {
  title: "test title2",
  description: "test desc2",
  userId: 1,
};

interface User {
  username: string;
  password: string;
  email: string;
}

interface Todo {
  title: string;
  description: string;
  done?: boolean;
  userId: number;
}

async function insertUser(user: User) {
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

async function insertTodo(todo: Todo) {
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

insertTodo(todoDetails);
// insertUser(userDetails);
