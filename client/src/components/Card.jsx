import { DeleteTask } from "./utils/TaskProvider";
import { MdDelete } from "react-icons/md";

const Card = ({ title, date, status, _id }) => {
  
  const handleDlt = async (e) => {
    e.preventDefault();
    await DeleteTask(_id)
    .then(() => {
      console.log("Task deleted");
    })
    .catch((err) => {
      console.error("Failed to delete task", err);
    });

    
  }
  return (
    <div className="w-[22rem] min-h-[8rem] h-[9rem] bg-gray-50 border flex flex-col justify-between border-gray-200 rounded-md shadow-md p-6 relative">
      <MdDelete onClick={handleDlt} className="cursor-pointer text-red-400 hover:text-red-600 text-xl absolute top-2 right-2" />
      <div className="mb-4">
        <h2 className="text-lg ">{title}</h2>
      </div>
      <div className="flex justify-between items-center text-xs">
        <p>{date}</p>
        <p className={`bg-green-400 text-white p-2`}>{status}</p>
      </div>
    </div>
  );
};

export default Card;
