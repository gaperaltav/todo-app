import { createTodo } from "@/db/actions";
import { useState } from "react";
import DueDateDropDown from "./DueDateDropdown";
import { DueDateBox } from "./due-date-box";

export default function AddTodoCard({
  updateTodos,
  userId,
}: {
  updateTodos: () => Promise<void>;
  userId?: string;
}) {
  const [todoText, setTodoText] = useState("");
  const [todoDueDate, setTodoDueDate] = useState<Date | undefined>(undefined);

  const addTodoHandler = async () => {
    if (userId) {
      createTodo(todoText, userId, todoDueDate).then(() => {
        setTodoText("");
        updateTodos();
      });
    }
  };

  const onRemoveDueDate = () => {
    setTodoDueDate(undefined)
  };

  return (
    <div className="add-todo-card">
      <div className="flex">
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
          disabled={todoText.trim() === "" || userId === undefined}
        >
          Add
        </button>
      </div>
      <div className="flex mt-1">
        <DueDateDropDown setDate={setTodoDueDate} />
        {todoDueDate && (
          <DueDateBox dueDate={todoDueDate} onClickClose={onRemoveDueDate} />
        )}
      </div>
    </div>
  );
}
