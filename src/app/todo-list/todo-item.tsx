
const TodoItem = ({
  data,
  onCheckTodo,
  onDeleteTodo,
}: {
  data: Todo;
  onCheckTodo: (id: number, value: boolean) => void;
  onDeleteTodo: (id: number) => void;
}) => (
  <li className="mr-1 mt-5 mx-1 flex justify-between bg-[#fff] px-2 py-4">
    <div>
      <input
        className="mr-2"
        type="checkbox"
        checked={data.checked}
        onChange={() => onCheckTodo(data.id, !data.checked)}
      />
      <span className={`${data.checked ? "line-through" : null}`}>
        {data.text}
      </span>
    </div>
    <div className="mr-2">
      <button className="btn" onClick={() => onDeleteTodo(data.id)}>
        x
      </button>
    </div>
  </li>
);

export default TodoItem;
