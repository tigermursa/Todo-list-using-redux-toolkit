import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  //from local
  // const { todos } = useAppSelector((state) => state.todos);

  //from sever
  const { data: todos, isError, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[70vh] font-semibold text-purple-500 text-2xl lg:text-5xl">
        Loading...
      </div>
    );
  }

  return (
    <div>
      {todos?.data.length == +0 ? (
        <div className="h-[70vh] flex flex-col gap-7 justify-center items-center border rounded-full">
          <p className="  font-semibold text-blue-600 text-2xl lg:text-5xl font-mono">
            Nothing Todo!😁
          </p>
          <AddTodoModal />
        </div>
      ) : (
        <div>
          <div className="flex justify-between mb-5">
            {/* <Button className="bg-primary-gradient text-xl font-semibold">Add todo</Button> */}
            <AddTodoModal />
            <TodoFilter priority={priority} setPriority={setPriority} />
          </div>
          <div className="  w-full  rounded-xl   bg-primary-gradient p-1">
            {/*<div className="bg-white p-5 flex justify-center items-center rounded-md text-2xl text-bold">
          <p>There is no task pending </p>
  </div>*/}
            <div className="bg-white p-1 md:p-4 lg:p-5 w-full h-full rounded-lg space-y-4">
              {todos?.data?.map((item) => (
                <TodoCard key={item._id} {...item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoContainer;
