import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-5xl font-bold font-serif my-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          My Todos
        </span>
      </h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
