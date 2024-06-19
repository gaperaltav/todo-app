import { faCalendarCheck, faClock } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatToDateString, getDayMomment, getFormatDate, getFormatTime } from "./helpers";
import { useState } from "react";

const getInitialDueDate = () => getFormatDate(new Date());
const getInitialDueTime = () => getFormatTime(new Date());
const getInitialDayMomment = () => getDayMomment(new Date());

export default function DueDateDropDown({ setDate }: { setDate: Function }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [dueDate, setDueDate] = useState<string>(getInitialDueDate());
  const [dueTime, setDueTime] = useState<string>(getInitialDueTime());
  const [dayMomment, setDayMomment] = useState<string>(getInitialDayMomment());

  const onCancelHandler = () => {
    setShowDropDown(false);
    setDueDate(getInitialDueDate());
    setDueTime(getInitialDueTime());
  };

  const addTDueDate = () => {
    const dateString = formatToDateString(dueDate, dueTime, dayMomment);
    const date = new Date(dateString);
    setDate(date);
    setShowDropDown(false);
  };

  return (
    <div className="relative">
      <button
        className="bg-white p-1 rounded text-xs border-solid border-[1px] border-[#ccc] w-[25px] mb-1"
        title="Set due date"
        onClick={() => setShowDropDown((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faCalendarCheck} className="mr-1 fa-lg" />
      </button>
      {showDropDown && (
        <div className="absolute bg-white rounded-lg pt-3 px-1 shadow-xl text-[14px] w-40 mt-1">
          <ul>
            <li className="px-1">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faClock}
                  className="self-center mr-2 ml-1"
                />
                <input
                  type="text"
                  className="h-7 w-[45%] border border-gray-300 text-gray-900 text-sm rounded-md px-[6px]"
                  value={dueTime}
                  onChange={() => {}}
                />
                <span className="mx-1"></span>
                <select
                  value={dayMomment}
                  className="border border-gray-300 text-gray-900 text-sm rounded-md px-[6px]"
                  onChange={(e) => {setDayMomment(e.target.value)}}
                >
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
              </div>
            </li>
            <li className="px-1 mt-3">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faCalendarDay}
                  className="self-center mr-2 ml-1"
                />
                <input
                  type="text"
                  className="h-7 w-full border border-gray-300 text-gray-900 text-sm rounded-md px-[6px]"
                  placeholder={"mm/dd/yyyy"}
                  value={dueDate}
                  onChange={() => {}}
                />
              </div>
            </li>
          </ul>
          <div className="flex flex-row-reverse my-2 mx-1 ">
            <button
              className="bg-blue-500 rounded py-1 px-3 mx-1 text-white"
              onClick={addTDueDate}
            >
              Add
            </button>
            <button
              onClick={onCancelHandler}
              className="bg-gray-500 rounded py-1 px-3 text-white mx-1"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
