import AddTaskButton from "../../shared/AddTaskButton/index";
import { AddTaskWrapper, InputTask } from "./elements";

// test
import useCollection from "../../hooks/useCollection";
import useTask from "../../hooks/useTask";

const AddTaskBar = () => {
  const { handleSubmit, handleTask, register } = useTask();

  return (
    <AddTaskWrapper onSubmit={handleSubmit(handleTask)}>
      <AddTaskButton />
      <InputTask placeholder="Add a task..." {...register("taskDescription")} />
    </AddTaskWrapper>
  );
};

export default AddTaskBar;
