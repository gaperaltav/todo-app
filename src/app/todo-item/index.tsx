
const TodoItem = ({
  data,
  onCheckTodo,
  onDeleteTodo,
}: {
  data: Todo;
  onCheckTodo: (id: number, value: boolean) => void;
  onDeleteTodo: (id: number) => void;
}) => (
  <li className="my-1 mt-5 flex justify-between">
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
    <div>
      <button className="btn right-0" onClick={() => onDeleteTodo(data.id)}>
        X
      </button>
    </div>
  </li>
);

export default TodoItem;
