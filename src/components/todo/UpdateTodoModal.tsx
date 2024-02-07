import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PenBoxIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { DialogClose } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";
import { useUpdateTodosMutation } from "@/redux/api/api";

type TTodoCardProps = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const UpdateTodoModal = ({
  _id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  const [task, setTask] = useState(title); // Use title as the initial state
  const [descriptionUp, setDescription] = useState(description);
  const [priorityUp, setPriority] = useState(priority);

  const [updateTodo, { data, isLoading, isError, isSuccess }] =
    useUpdateTodosMutation();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault(); 
    const taskData = {
      title: task,
      description: descriptionUp,
      priority: priorityUp,
    };

    const options = {
      id: _id,
      data: taskData,
    };

    updateTodo(options);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"ghost"}>
            <PenBoxIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Task</DialogTitle>
            <DialogDescription>Update your task if you want</DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="task" className="text-right">
                  Task
                </Label>
                <Input
                  onBlur={(e) => setTask(e.target.value)}
                  id="task"
                  className="col-span-3"
                  defaultValue={title}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="descriptionUp" className="text-right">
                  Description
                </Label>
                <Input
                  onBlur={(e) => setDescription(e.target.value)}
                  id="descriptionUp"
                  className="col-span-3"
                  defaultValue={description}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="priorityUp" className="text-right">
                  Priority
                </Label>
                <Select
                  onValueChange={(value: string) => setPriority(value)}
                  value={priorityUp}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder={priority} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Priority</SelectLabel>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end">
              <DialogClose>
                <Button type="submit" className="bg-primary-gradient">
                  Save changes
                </Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateTodoModal;
