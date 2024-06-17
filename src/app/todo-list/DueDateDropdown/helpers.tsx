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
