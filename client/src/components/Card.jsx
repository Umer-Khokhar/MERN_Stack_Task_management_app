import { useTaskContext } from "./";
import { DeleteTask } from "./utils/TaskProvider";
import { MdDelete } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";


const Card = ({ title, date, _id , onClick}) => {
  console.log(title, date)
  const { dltTask } = useTaskContext();
  
  const handleDlt = async (e) => {
    e.preventDefault();
    await DeleteTask(_id)
    await dltTask(_id)
    .then(() => {
      console.log("Task deleted");
    })
    .catch((err) => {
      console.error("Failed to delete task", err);
    });
  }
    const formatedDate = formatDistanceToNow(new Date(date), { addSuffix: true })
  return (
    <div className="w-[22rem] min-h-[8rem] h-[9rem] bg-gray-50 border flex flex-col justify-between border-gray-200 rounded-md shadow-md p-6 relative">
      <MdDelete onClick={handleDlt} className="cursor-pointer text-red-400 hover:text-red-600 text-xl absolute top-2 right-2" />
      <div className="mb-4">
        <h2 className="text-lg ">{title}</h2>
      </div>
      <div className="flex justify-between items-center text-xs">
        <p className="font-sans text-gray-600">{formatedDate}</p>
        <p onClick={onClick} className={`bg-gray-700 hover:bg-gray-500 cursor-pointer text-white p-2`}>Open Task</p>
      </div>
    </div>
  );
};

export default Card;
