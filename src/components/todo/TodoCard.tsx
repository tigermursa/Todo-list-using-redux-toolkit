import { Loader, PenBoxIcon, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
// import { useAppDispatch } from "@/redux/hook";
//import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";
import {
  useDeleteTodosMutation,
  useUpdateTodosMutation,
} from "@/redux/api/api";
import UpdateTodoModal from "./UpdateTodoModal";

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
        <div className=" flex items-center mr-2">
          <div
            className={` size-3 rounded-full 
            ${priority === "high" ? "bg-red-600" : null}
            ${priority === "medium" ? "bg-yellow-500" : null}
            ${priority === "low" ? "bg-green-600" : null}
            
            `}
          ></div>
        </div>
        <p className="font-bold flex-1 ">{title}</p>

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
        <p className="flex-[2] truncate ps-3 hidden md:flex">{description}</p>
        <div className="flex space-x-5">
          <Button
            onClick={deleteTask}
            title={_id}
            className="bg-red-500 ps-3 hidden md:flex"
          >
            <Trash2 />
          </Button>
          <Button
            onClick={deleteTask}
            title={_id}
            className=" ps-3 md:hidden"
            variant={"ghost"}
          >
            <Trash2 />
          </Button>
          <UpdateTodoModal
            _id={_id}
            title={title}
            description={description}
            isCompleted={isCompleted}
            priority={priority}
          />
          <Button className="md:hidden" variant={"ghost"}>
            <PenBoxIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
