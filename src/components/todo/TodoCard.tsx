import { PenBoxIcon, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div>
      <div className=" rounded-md flex justify-between items-center p-3 border ">
        <input type="checkbox" name="" id="" />
        <p className="font-bold">Todo Title</p>
        <p>Time</p>
        <p>Description</p>
        <div className="flex space-x-5">
          <Button className="bg-red-500">
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
