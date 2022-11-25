import { useContext } from "react";
import CollectionsContext from "../data/context/collections/collectionsContext";
import TaskModel from "../data/models/taskModel";

const useTask = (oldCollection) => {
  const { handleSetTask } = useContext(CollectionsContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // implement React Hook Form
    const newTask = new TaskModel("description");
    handleSetTask(oldCollection, newTask);
  };

  return {
    handleSubmit,
  };
};

export default useTask;
