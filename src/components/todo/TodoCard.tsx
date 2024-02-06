import { PenBoxIcon, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hook";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({
  title,
  description,
  id,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const toggleState = () => {
    dispatch(toggleComplete(id));
  };

  return (
    <div>
      <div className=" rounded-md flex justify-between items-center p-3 border ">
        <input
          onChange={toggleState}
          type="checkbox"
          name="complete"
          id="complete"
          className="me-4"
        />
        <p className="font-bold flex-1">{title}</p>
        <div className="flex-1 flex items-center ">
          <div
            className={` size-3 rounded-full me-3 
            ${priority === "high" ? "bg-red-600" : null}
            ${priority === "medium" ? "bg-yellow-500" : null}
            ${priority === "low" ? "bg-green-600" : null}
            
            `}
          ></div>
          <p className="font-bold ">{priority}</p>
        </div>

        {/* <p>Time</p> */}
        <div className="flex-1">
          {isCompleted ? (
            <p className="text-green-600 font-semibold">Done</p>
          ) : (
            <p className="text-red-600 font-semibold">Pending</p>
          )}
        </div>
        <p className="flex-[2]">{description}</p>
        <div className="flex space-x-5">
          <Button
            onClick={() => dispatch(removeTodo(id))}
            className="bg-red-500"
          >
            <Trash2 />
          </Button>
          <Button className="bg-blue-800">
            <PenBoxIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
