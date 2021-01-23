import "core-js/modules/es.promise.js";
const baseUrl = 'https://6002aea64f17c800175581fe.mockapi.io/api/v1/tasks';
export const getTasksList = () => fetch(baseUrl).then(response => response.json());
export const createTask = taskData => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(taskData)
});
export const updateTask = (taskId, updatedTaskData) => fetch("".concat(baseUrl, "/").concat(taskId), {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(updatedTaskData)
});
export const deleteTask = taskId => fetch("".concat(baseUrl, "/").concat(taskId), {
  method: 'DELETE'
});