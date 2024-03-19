
const TodoItem = ({
  data,
  onCheckTodo,
}: {
  data: Todo,
  onCheckTodo: (id: number, value: boolean) => void,
}) => (
  <li className="my-1">
    <input
      className="mr-2"
      type="checkbox"
      checked={data.checked}
      onChange={() => onCheckTodo(data.id, !data.checked)}
    />
    <span className={`${data.checked ? 'line-through': null }`} >{data.text}</span>
  </li>
);

export default TodoItem;
