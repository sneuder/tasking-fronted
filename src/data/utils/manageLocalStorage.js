export const idStorages = {
  firstOption: "taskingTodoTodo",
};

const saveInfo = (idStorage, info) => {
  localStorage.setItem(idStorage, JSON.stringify(info));
};

const getInfo = (idStorage) => {
  return JSON.parse(localStorage.getItem(idStorage));
};

const removeLocal = (idStorage) => {
  localStorage.removeItem(idStorage);
};

const manageLocalStorage = {
  saveInfo,
  getInfo,
  removeLocal,
};

export default manageLocalStorage;
