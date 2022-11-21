import AddTaskButton from "../../shared/AddTaskButton/index";
import { AddTaskWrapper, InputTask } from "./elements";

const AddTaskBar = () => {
  return (
    <AddTaskWrapper>
      <AddTaskButton />
      <InputTask placeholder="Add a task..." />
    </AddTaskWrapper>
  );
};

export default AddTaskBar;
