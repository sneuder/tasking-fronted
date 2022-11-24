function TaskModel(id, description) {
  const id = id;
  let description = description;
  let completed = false;

  const subTasks = [];
  const completedSubTasks = [];

  function completeTask() {
    completed = true;
  }

  function uncompleteTask() {
    completed = false;
  }

  function addSubtask(id, description) {
    const subTask = new TaskModel(id, description);
    this.subTasks.shift(subTask);
  }

  function removeSubtask(idSubTask) {
    this.subTasks = this.subTasks.filter((subTask) => subTask.id !== idSubTask);
  }

  function completeSubTask(idSubtask) {
    this.subTasks = this.subTasks.map((subTask) => {
      if (subTask.id === idSubtask) {
        subTask.completeTask();
        this.completedSubTasks.push();
      }
    });
  }
}

export default TaskModel;
