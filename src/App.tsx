import "./App.css";
import { components } from "../todo-api-types";

type Todo = components["schemas"]["Todo"];

const todos: Todo[] = [
  { id: "1", task: "Do the laundry", completed: false },
  { id: "2", task: "Take out the trash", completed: true },
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
    </>
  );
}

export default App;
