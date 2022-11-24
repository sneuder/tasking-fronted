import { v4 as uuidv4 } from "uuid";
import TaskModel from "./taskModel";

function CollectionModel(collectionName) {
  const id = uuidv4();
  let name = collectionName;
  const tasks = [];

  function getIdCollection() {
    return id;
  }

  function addTask(description) {
    const task = new TaskModel(uuidv4(), description);
  }

  function removeTask(taskId) {
    tasks = tasks.filter((task) => task !== taskId);
  }
}

const newModel = new CollectionModel(55);
console.log(newModel);
export default CollectionModel;
