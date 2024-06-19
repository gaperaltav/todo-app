export function getInitialDueTime() {
  const date = new Date();
  const minutes =
    date.getMinutes() < 10
      ? `0${date.getMinutes()}`
      : date.getMinutes().toString();
  const hours =
    date.getHours() < 10 ? `0${date.getHours() + 1}` : `${date.getHours() + 1}`;

  return `${hours}: ${minutes}`;
}

export function getInitialDueDate() {
  const date = new Date();
  return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
}
