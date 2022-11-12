import React from "react";

interface AddTodoI {
  addTodo: (title: string) => void;
}

export default function AddTodo({ addTodo }: AddTodoI) {
  const [title, setTitle] = React.useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex justify-center gap-2 w-[80%] mx-auto"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        className="bg-gray-50 border border-gray-300 w-[80%] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-none block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter the task"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 hover:scale-105 font-bold text-white rounded px-4"
      >
        +
      </button>
    </form>
  );
}
