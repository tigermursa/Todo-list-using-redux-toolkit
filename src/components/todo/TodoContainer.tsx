import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
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
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
