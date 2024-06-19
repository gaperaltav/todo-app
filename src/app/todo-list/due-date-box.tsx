export function DueDateBox({ dueDate }: { dueDate: Date }) {
  return (
    <>
      <span className="mx-1 pl-1 pr-1 border text-blue">{dueDate.toString()}</span>
    </>
  );
}
