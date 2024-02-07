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
          defaultChecked={isCompleted}
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%", // Full border-radius for a circular shape
            backgroundColor: "red", // Background color in red
            color: "red", // Text color in red (optional)
          }}
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
        <p
          className={`font-bold flex-1 truncate ${
            isCompleted ? "line-through" : "" // Apply line-through for completed tasks
          }`}
        >
          {title}
        </p>

        {/* <p>Time</p> */}
        <div className="me-2 ms-2 hidden md:flex">
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
        <div className="flex">
          <Button
            onClick={deleteTask}
            title={_id}
            className=""
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
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
