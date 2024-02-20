const TodoItem = ({ text, checked }: { text: string; checked: boolean }) => (
  <li className="my-1">
    <input className="mr-2" type="checkbox" checked={checked} />
    <span>{text}</span>
  </li>
);

export default TodoItem;
