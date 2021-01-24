import { onCreateTask } from './createTask';
import { onToggleTask } from './updateTask';
import { onDeleteTask } from './removeTask';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
  todoListElem.addEventListener('click', onDeleteTask);
};
