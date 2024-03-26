import "./App.css";
import { components } from "../todo-api-types";

// typically in a real app, you would import these types from a separate file
type Todo = components["schemas"]["Todo"];
type User = components["schemas"]["User"];

const todos: Todo[] = [
  { id: "1", task: "Do the laundry", completed: false },
  { id: "2", task: "Take out the trash", completed: true },
];

const users: User[] = [
  { id: "1", name: "Alice", favoriteThings: ["Puppies", "Kittens"] },
  { id: "2", name: "Bob", favoriteThings: ["Dinosaurs", "Unicorns"] },
];

function App() {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              console.log("\n", `hello ${todo.id}`, "\n");
            }}
          />
          <span>{todo.task}</span>
        </div>
      ))}
      <hr />
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <ul>
            {user.favoriteThings?.map((thing) => (
              <li key={thing}>{thing}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default App;
