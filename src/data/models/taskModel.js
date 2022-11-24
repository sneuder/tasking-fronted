function TaskModel(idTask, descriptionTask) {
  const id = idTask;
  let description = descriptionTask;
  let completed = false;

  const subTasks = [];
  const completedSubTasks = [];

  this.getTaskId = () => {
    return id;
  };

  this.getDescription = () => {
    return description;
  };

  this.completeTask = () => {
    completed = true;
  };

  this.uncompleteTask = () => {
    completed = false;
  };

  this.addSubtask = (id, description) => {
    const subTask = new TaskModel(id, description);
    subTasks.shift(subTask);
  };

  this.removeSubtask = (idSubTask) => {
    subTasks = subTasks.filter((subTask) => subTask.getTaskId() !== idSubTask);
  };

  this.completeSubTask = (idSubtask) => {
    subTasks = this.subTasks.map((subTask) => {
      if (subTask.getTaskId === idSubtask) {
        subTask.completeTask();
        completedSubTasks.push();
      }
    });
  };
}

export default TaskModel;
