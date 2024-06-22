type Todo = {
    id: number;
    text: string;
    checked: boolean;
    created_at: string;
    deleted_at: string | null;
    dueDate: Date | null;
  };