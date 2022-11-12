import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useTodo } from "./context/store";
export default function App() {
const data = useTodo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-800 w-screen">
      <h1 className="text-center py-4 ">
        <span className="text-4xl text-blue-500 leading-relaxed font-bold">
          Todo
        </span>
        <span className="text-4xl text-white font-bold ">App</span>
      </h1>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <AddTodo
            addTodo={data.addTodo}
          />
        </div>
        <TodoList
          todos={data.todos}
          toggleTodo={data.toggleTodo}
          deleteTodo={data.deleteTodo}
        />
      </div>
    </div>
  );
}
