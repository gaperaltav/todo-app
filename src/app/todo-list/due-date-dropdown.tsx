import { faCalendarPlus, faClock } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function DueDateDropDown() {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="relative">
      <button
        className="bg-white p-1 rounded text-xs border-solid border-[1px] border-[#ccc]"
        title="Set due date"
        onClick={() => setShowDropDown((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faCalendarPlus} className="mr-1" />
        Set due date
      </button>
      {showDropDown && (
        <div className="absolute bg-white rounded-lg pt-3 px-1 shadow-xl text-[14px] w-60 mt-1">
          <ul>
            <li className="px-1">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faClock}
                  className="self-center mr-2 ml-1"
                />
                <input
                  type="text"
                  className="h-7 w-full border border-gray-300 text-gray-900 text-sm rounded-md px-[6px]"
                  value={"11:00 am"}
                />
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
                  value={"mm/dd/yyyy"}
                />
              </div>
            </li>
          </ul>
          <div className="flex flex-row-reverse my-2 mx-1 ">
            <button className="bg-blue-500 rounded py-1 px-3 text-white">
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
