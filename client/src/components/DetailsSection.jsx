import React from "react";
import { statusOpt, assigneeOpt } from "../data";
import { FaAngleDown } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Select from "react-select";
import { formatDistanceToNow } from "date-fns";


const DetailsSection = ({state, setStatus, setAssignee, updatedAt, onClick}) => {
  const formattedDate = formatDistanceToNow(new Date(updatedAt), { addSuffix: true })
  return (
    <div className="other-details flex-1 border border-gray-600 py-3 mt-8 ">
      <MdOutlineClose onClick={onClick} className="absolute top-4 mb-6 right-6 text-[1.7rem] cursor-pointer" />
      <div className="details-heading mb-4 flex justify-between items-center border-b border-gray-600 py-2 px-4">
        <h3>Details</h3>
        <FaAngleDown className="text-xl text-black" />
      </div>
      <div className="details-content flex flex-col gap-4 px-4">
        <div className="flex items-center">
          <p className="w-[8rem]">Status:</p>
          <Select
            options={statusOpt}
            defaultValue={statusOpt.find(
              (option) => option.value === state.status
            )}
            className="select-status w-full border-none"
            onChange={(e) => setStatus(e.value)}
            styles={{
              control: (baseStyle) => ({
                ...baseStyle,
                backgroundColor: "transparent",
                outline: "none",
              }),
            }}
          />
        </div>
        <div className="task-assigned-to">
          <div className="flex items-center">
            <p className="w-[8rem]">Assignee:</p>
            <Select
              options={assigneeOpt}
              defaultValue={assigneeOpt.find(
                (option) => option.value === state.assignee
              )}
              className="select-assignee w-full"
              onChange={(e) => setAssignee(e.value)}
              styles={{
                control: (baseStyle) => ({
                  ...baseStyle,
                  backgroundColor: "transparent",
                  outline: "none",
                }),
              }}
            />
          </div>
        </div>
        <div className="task-updatedAt">
          <p className="flex gap-4">
            <span className="w-[6rem] lg:w-auto">
            Updated:
            </span>
             <span className="text-gray-700">{formattedDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
