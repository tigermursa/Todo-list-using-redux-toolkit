import { PenBoxIcon, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hook";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

const TodoCard = ({ title, description, id, isCompleted }: TTodoCardProps) => {
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
        />
        <p className="font-bold">{title}</p>
        {/* <p>Time</p> */}
        <div>
          {isCompleted ? (
            <p className="text-green-600 font-semibold">Done</p>
          ) : (
            <p className="text-red-600 font-semibold">Pending</p>
          )}
        </div>
        <p>{description}</p>
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
