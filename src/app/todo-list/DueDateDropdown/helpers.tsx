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

export function getDayMomment(date: Date) {
  const hours = date.getHours();
  return hours >= 12 ? "pm" : "am";
}

export function formatToDateString(
  dueDate: string,
  dueTime: string,
  dayMomment: string
) {
  const [moth, day, year] = dueDate.split("/");
  const [hour, minutes] = dueTime.split(":");
  const hoursTo24 = dayMomment === "pm" ? parseInt(hour) + 12 : parseInt(hour);
  return `${year}-${moth}-${day}T${hoursTo24}:${minutes}:00`;
}
