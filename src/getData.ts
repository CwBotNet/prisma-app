import { client } from "../utils/client";

async function getUsers() {
  const response = await client.user.findMany({});
  console.log(response);
  return response;
}
async function getTodos() {
  const response = await client.todo.findMany({});
  console.log(response);
  return response;
}

export { getUsers, getTodos };
