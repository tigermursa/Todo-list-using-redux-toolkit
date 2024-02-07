import { Loader, PenBoxIcon, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
// import { useAppDispatch } from "@/redux/hook";
//import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";
import {
  useDeleteTodosMutation,
  useUpdateTodosMutation,
} from "@/redux/api/api";

type TTodoCardProps = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({
  _id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  // const dispatch = useAppDispatch();
  const [updateTodo, { isError, isLoading, isSuccess }] =
    useUpdateTodosMutation();

  //delete

  const [deleteThis, resturns] = useDeleteTodosMutation();

  const toggleState = () => {
    const taskData = {
      title,
      description,
      priority,
      isCompleted: !isCompleted,
    };
    //dispatch(toggleComplete(id));
    //server

    const options = {
      id: _id,
      data: taskData,
    };

    updateTodo(options);
  };

  const deleteTask = () => {
    const options = {
      id: _id,
    };

    deleteThis(options);
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
          defaultChecked={isCompleted} // that will show the checked task even after loading
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
            <p className="text-green-600 font-semibold">
              {isLoading ? (
                <p className="text-gray-600 font-semibold">
                  <Loader />
                </p>
              ) : (
                "Done"
              )}
            </p>
          ) : (
            <p className="text-red-600 font-semibold">
              {isLoading ? (
                <p className="text-gray-600 font-semibold">
                  <Loader />
                </p>
              ) : (
                "Pending"
              )}
            </p>
          )}
        </div>
        <p className="flex-[2]">{description}</p>
        <div className="flex space-x-5">
          <Button onClick={deleteTask} title={_id} className="bg-red-500">
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
