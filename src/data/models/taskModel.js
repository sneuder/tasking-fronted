import { v4 as uuidv4 } from "uuid";

class TaskModel {
  constructor(descriptionTask) {
    this.id = uuidv4();
    this.description = descriptionTask;
    this.completed = false;
    this.subTasks = [];
    this.completedSubTasks = [];
  }
}

export default TaskModel;
