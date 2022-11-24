function TaskModel(idTask, descriptionTask) {
  const id = idTask;
  let description = descriptionTask;
  let completed = false;

  const subTasks = [];
  const completedSubTasks = [];

  function getTaskId() {
    return id;
  }

  function getDescription() {
    return description;
  }

  function completeTask() {
    completed = true;
  }

  function uncompleteTask() {
    completed = false;
  }

  function addSubtask(id, description) {
    const subTask = new TaskModel(id, description);
    subTasks.shift(subTask);
  }

  function removeSubtask(idSubTask) {
    subTasks = subTasks.filter((subTask) => subTask.getTaskId() !== idSubTask);
  }

  function completeSubTask(idSubtask) {
    subTasks = this.subTasks.map((subTask) => {
      if (subTask.getTaskId === idSubtask) {
        subTask.completeTask();
        completedSubTasks.push();
      }
    });
  }
}

export default TaskModel;
