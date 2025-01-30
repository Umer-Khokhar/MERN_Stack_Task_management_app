import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

import Select from "react-select";

const TaskDetails = () => {
  const statusOpt = [
    { value: "to do", label: "To Do" },
    { value: "in progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
  ];
  const assigneeOpt = [
    { value: "umer khokhar", label: "Umer Khokhar" },
    { value: "ramzan malik", label: "Ramzan Malik" },
    { value: "nadir ali", label: "Nadir Ali" },
    { value: "bilal ahmed", label: "Bilal Ahmed" },
  ];
  return (
    <div className="absolute  top-0 left-0 right-0 bottom-0 hidden justify-center items-center w-full h-screen bg-gray-300">
      <div className="w-11/12 lg:w-[70%] bg-white mx-auto h-auto">
        <div className="wrapper  px-[1.5rem] py-6 gap-[2rem] relative flex flex-col-reverse lg:flex-row">
          <div className="task-info basis-[65%]">
            <h1
              className="text-2xl border-none outline-none mb-4"
              contentEditable
            >
              SEO for Solvorr Tech Website
            </h1>
            <div className="description">
              <h3>Description</h3>
              <p
                className="border p-4 rounded border-black min-h-[12rem] outline-none"
                contentEditable
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                expedita a ducimus necessitatibus quae aliquam eaque sunt, animi
                molestiae quod asperiores itaque sint libero incidunt unde
                laudantium numquam saepe aperiam.
              </p>
            </div>
          </div>
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
                  className="select-status w-full border-none"
                  styles={{
                    control: (baseStyle, state) => ({
                      ...baseStyle,
                      border: "none",
                      backgroundColor: "transparent",
                      outline: "none",
                    }),
                    dropdownIndicator: (baseStyle, state) => ({
                      ...baseStyle,
                      display: "none",
                    }),
                    indicatorSeparator: (baseStyle, state) => ({
                      ...baseStyle,
                      border: "none",
                      display: "none",
                    }),
                  }}
                />
              </div>
              <div className="task-assigned-to">
                <div className="flex items-center">
                  <p className="w-[7rem]">Assignee:</p>
                  <Select
                    options={assigneeOpt}
                    className="select-assignee w-full"
                    styles={{
                      control: (baseStyle, state) => ({
                        ...baseStyle,
                        border: "none",
                        backgroundColor: "transparent",
                        outline: "none",
                      }),
                      dropdownIndicator: (baseStyle, state) => ({
                        ...baseStyle,
                        display: "none",
                        border: "none",
                      }),
                      indicatorSeparator: (baseStyle, state) => ({
                        ...baseStyle,
                        border: "none",
                        display: "none",
                      }),
                    }}
                  />
                </div>
              </div>
              <div className="task-createdAt">
                <p>
                  Created At:{" "}
                  <span className="text-gray-500">28th Jan 2025</span>
                </p>
              </div>
              <div className="task-updatedAt">
                <p>
                  Updated At:{" "}
                  <span className="text-gray-500">29th March 2025</span>
                </p>
              </div>
            </div>
          </div>
        </div>
          <div className="updateBtn text-right px-4 pb-4">
            <button className="bg-gray-700 text-white py-3 px-4 rounded-md cursor-pointer relative right-2 hover:bg-gray-500" disabled>Update Now</button>
          </div>
      </div>
    </div>
  );
};

export default TaskDetails;
