import { createTodo } from "@/db/actions";
import { Dispatch, SetStateAction, useState } from "react";

export default function AddTodoCard({
  updateTodos,
  userId,
}: {
  updateTodos: () => Promise<void>;
  userId: number;
}) {
  const [todoText, setTodoText] = useState("");

  const addTodoHandler = async () => {
    createTodo(todoText, userId).then(() => {
      setTodoText("");
      updateTodos();
    });
  };

  return (
    <div className="add-todo-card">
      <input
        type="text"
        className="h-[35px] w-[480px] max-md:w-64  border-[1px] border-[#808080] rounded"
        placeholder=" Insert your todo's text"
        value={todoText}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTodoText(event.target.value)
        }
      />
      <button
        type="button"
        onClick={addTodoHandler}
        className={`bg-blue-500 h-[35px] hover:bg-blue-700 w-20 max-md:w-15 text-white font-bold py-1 px-2 rounded mx-1 disabled:bg-gray-300 disabled:cursor-not-allowed`}
        disabled={todoText.trim() === ""}
      >
        Add
      </button>
    </div>
  );
}
