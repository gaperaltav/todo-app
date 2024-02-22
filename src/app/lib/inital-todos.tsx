export type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

const initialTodos: Todo[] = [
  { id: 1, text: "Learn React", checked: false },
  { id: 2, text: "Learn Next.js", checked: false },
  { id: 3, text: "Build something", checked: false },
];

/**
 * Represents the initial todos for the application.
 */
export default initialTodos;
