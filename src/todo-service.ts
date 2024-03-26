import { paths, components } from "../todo-api-types";

const API_URL = "http://localhost:3000/api";

type GetTodosResponse =
  paths["/todos"]["get"]["responses"]["200"]["content"]["application/json"];
type NewTodoRequest = components["schemas"]["NewTodo"];
type NewTodoResponse =
  paths["/todos"]["post"]["responses"]["201"]["content"]["application/json"];
type UpdateTodoRequest = components["schemas"]["TodoUpdate"];
type UpdateTodoResponse =
  paths["/todos/{id}"]["patch"]["responses"]["200"]["content"]["application/json"];

export const fetchTodos = async (): Promise<GetTodosResponse> => {
  const response = await fetch(`${API_URL}/todos`);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};

export const addTodo = async (
  newTodo: NewTodoRequest
): Promise<NewTodoResponse> => {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  if (!response.ok) {
    throw new Error("Failed to add todo");
  }
  return response.json();
};

export const updateTodo = async (
  id: string,
  update: UpdateTodoRequest
): Promise<UpdateTodoResponse> => {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  });
  if (!response.ok) {
    throw new Error("Failed to update todo");
  }
  return response.json();
};
