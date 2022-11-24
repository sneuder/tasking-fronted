import { v4 as uuidv4 } from "uuid";
import TaskModel from "./taskModel";

function CollectionModel(collectionName) {
  const id = uuidv4();
  let name = collectionName;
  const tasks = [];

  this.getIdCollection = () => {
    return id;
  };

  this.addTask = (description) => {
    const task = new TaskModel(uuidv4(), description);
  };

  this.removeTask = (taskId) => {
    tasks = tasks.filter((task) => task !== taskId);
  };
}

export default CollectionModel;
