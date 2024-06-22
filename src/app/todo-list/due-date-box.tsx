import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getDayMomment,
  getFormatDate,
  getFormatTime,
} from "./DueDateDropdown/helpers";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function DueDateBox({
  dueDate,
  onClickClose,
}: {
  dueDate: Date;
  onClickClose: Function;
}) {
  return (
    <>
      <div className="mx-1 pl-1 pr-1 py-1 border text-[13px] rounded-lg text-[#888DA7] bg-[#888DA7] bg-opacity-10">
        <span title="Todo due date" className="mr-1">
          {`${getFormatDate(dueDate)} - ${getFormatTime(
            dueDate
          )} ${getDayMomment(dueDate)}`}
        </span>
        <button onClick={() => onClickClose()}>
          <FontAwesomeIcon icon={faXmark} className="mr-1 fa-lg" />
        </button>
      </div>
    </>
  );
}
