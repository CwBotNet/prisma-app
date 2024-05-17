import { client } from "../utils/client";

async function deleteUser(userId: number) {
  const response = await client.user.delete({
    where: {
      id: userId,
    },
  });

  if (!response) {
    console.log("User not found");
  }
  console.log(`delete query for todo ${userId} success`);
}

async function deleteTodo(todoId: number) {
  const response = await client.todo.delete({
    where: {
      id: todoId,
    },
  });

  if (!response) {
    console.log("Todo not found");
  }
  console.log(`delete query for todo ${todoId} success`);
}

export { deleteUser, deleteTodo };
