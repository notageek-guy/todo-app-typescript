export type Todo = {
    id: number;
    title: string;
    completed: boolean;
  };
  
  export type TodoContextType = {
    todos: Todo[];
    addTodo: (title: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
  };