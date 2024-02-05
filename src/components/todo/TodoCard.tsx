const TodoCard = () => {
  return (
    <div>
      <div className=" rounded-md flex justify-between items-center p-3 border ">
        <input type="checkbox" name="" id="" />
        <p className="font-bold">Todo Title</p>
        <p>Time</p>
        <p>Description</p>
        <div className="flex space-x-5">
          <div>DEL</div>
          <div>Edit</div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
