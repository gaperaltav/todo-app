import Navbar from "./components/navbar";
import TodoList from "./todo-list";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-100">
        <TodoList />
      </div>
    </>
  );
}
