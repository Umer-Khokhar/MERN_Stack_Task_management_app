import React from "react";
import { statusOpt, assigneeOpt } from "../data";
import { FaAngleDown } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Select from "react-select";

const DetailsSection = ({state, setStatus, setAssignee, createdAt, updatedAt,}) => {
  return (
    <div className="other-details flex-1 border border-gray-600 py-3 mt-8 ">
      <MdOutlineClose className="absolute top-4 mb-6 right-6 text-[1.7rem] cursor-pointer" />
      <div className="details-heading mb-4 flex justify-between items-center border-b border-gray-600 py-2 px-4">
        <h3>Details</h3>
        <FaAngleDown className="text-xl text-black" />
      </div>
      <div className="details-content flex flex-col gap-4 px-4">
        <div className="flex items-center">
          <p className="w-[7rem]">Status:</p>
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
            <p className="w-[7rem]">Assignee:</p>
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
        <div className="task-createdAt">
          <p>
            Created At: <span className="text-gray-500">{createdAt}</span>
          </p>
        </div>
        <div className="task-updatedAt">
          <p>
            Updated At: <span className="text-gray-500">{updatedAt}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
