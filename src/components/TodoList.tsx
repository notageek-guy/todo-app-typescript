import { Todo } from "../types/types";
import { AiFillDelete } from "react-icons/ai";

interface TodoListI {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
export default function TodoList({ todos, toggleTodo, deleteTodo }: TodoListI) {
  return (
    <div className="mt-8  font-serif max-w-sm w-[80%] mx-auto    ">
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className="flex border shadow-md border-gray-500 rounded my-4 justify-center items-center py-2 gap-2"
          >
            <h1
              className={`${
                todo.completed
                  ? "text-white text-2xl  line-through"
                  : "text-white text-2xl"
              } `}
            >
              {todo.title}
            </h1>
              <input
              className = 'w-5 h-5 accent-green-500'
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
            <button onClick={() => deleteTodo(todo.id)}>
              <AiFillDelete className="text-2xl text-orange-500" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
