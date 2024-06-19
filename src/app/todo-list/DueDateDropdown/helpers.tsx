export function getFormatTime(date: Date) {
  const minutes =
    date.getMinutes() < 10
      ? `0${date.getMinutes()}`
      : date.getMinutes().toString();

  let hours = date.getHours();

  if (hours >= 12) {
    hours = hours - 12;
  }
  return `${hours < 10 && "0"}${hours}:${minutes}`;
}

export function getFormatDate(date: Date) {
  // we need to add 1 to moth bc index start in 0
  const currentMoth = date.getMonth() + 1;
  const formatedMoth = currentMoth < 9 ? `0${currentMoth}` : currentMoth;

  const currentDay = date.getDate();
  const formatedDay = currentDay < 9 ? `0${currentDay}` : currentDay;
  return `${formatedMoth}/${formatedDay}/${date.getFullYear()}`;
}

export function formatToDateString(dueDate: string, dueTime: string) {
  const [moth, day, year] = dueDate.split("/");
  const [hour, minutes] = dueTime.split(":");
  return `${year}-${moth}-${day}T${hour}:${minutes}:00`;
}
