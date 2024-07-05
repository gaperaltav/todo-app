const TodoItem = ({
  data,
  onCheckTodo,
  onDeleteTodo,
  className = "",
}: {
  data: Todo;
  onCheckTodo: (id: number, value: boolean) => void;
  onDeleteTodo: (id: number) => void;
  className?: string;
}) => (
  <li
    className={`mr-1 mt-5 mx-1 flex justify-between bg-[#fff] px-2 py-4 ${className} rounded-md`}
  >
    <div className="w-full">
      <input
        className="mr-2"
        type="checkbox"
        checked={data.checked}
        onChange={() => onCheckTodo(data.id, !data.checked)}
      />
      <span className={`${data.checked ? "line-through" : null}`}>
        {data.text}
      </span>
      <div className="mt-1">
        {data.dueDate && (
          <div className="inline-block mx-1 py-1 px-2 border text-[13px] rounded-lg text-[#888DA7] bg-[#888DA7] bg-opacity-10">
            {data.dueDate.toDateString()}
          </div>
        )}
      </div>
    </div>
    <div className="mr-2">
      <button className="btn h-1" onClick={() => onDeleteTodo(data.id)}>
        x
      </button>
    </div>
  </li>
);

export default TodoItem;
