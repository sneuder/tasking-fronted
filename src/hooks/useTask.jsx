import { useContext } from "react";
import { useForm } from "react-hook-form";

import CollectionsContext from "../data/context/collections/collectionsContext";
import TaskModel from "../data/models/taskModel";

const useTask = (oldCollection) => {
  const { register, handleSubmit } = useForm();
  const { handleSetTask } = useContext(CollectionsContext);

  const handleTask = (data) => {
    const { taskDescription } = data;
    const newTask = new TaskModel(taskDescription);
    console.log(newTask);
    // handleSetTask(oldCollection, newTask);
  };

  return {
    handleTask,
    handleSubmit,
    register,
  };
};

export default useTask;
