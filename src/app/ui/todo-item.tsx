import { Todo } from "../lib/inital-todos";

const TodoItem = ({
  data,
  onCheckTodo,
}: {
  data: Todo,
  onCheckTodo: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <li className="my-1">
    <input
      className="mr-2"
      type="checkbox"
      checked={data.checked}
      onChange={onCheckTodo}
    />
    <span>{data.text}</span>
  </li>
);

export default TodoItem;
