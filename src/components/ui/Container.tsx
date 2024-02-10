import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className=" h-screen w-full max-w-4xl mx-auto  p-2 ">
      {children}
    </div>
  );
};

export default Container;
