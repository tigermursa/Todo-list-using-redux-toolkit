import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetUsersQuery } from "@/redux/api/api";

const TodoContainer = () => {
  //from local
    const { todos } = useAppSelector((state) => state.todos);

  //from sever
  // const { data: todos, isError, isLoading } = useGetUsersQuery(undefined);

  // console.log(todos);
  // if (isLoading) {
  //   return <div>Loading..</div>;
  // }

  return (
    <div>
      <div className="flex justify-between mb-5">
        {/* <Button className="bg-primary-gradient text-xl font-semibold">Add todo</Button> */}
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="  w-full  rounded-xl   bg-primary-gradient p-1">
        {/*<div className="bg-white p-5 flex justify-center items-center rounded-md text-2xl text-bold">
          <p>There is no task pending </p>
  </div>*/}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-4">
          {todos.map((item) => (
            <TodoCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
