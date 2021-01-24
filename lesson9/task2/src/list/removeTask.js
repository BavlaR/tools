import { deleteTask, getTasksList } from './tasksGateway';
import { setItem } from './storage';
import { renderTasks } from './renderer';

export const onDeleteTask = (e) => {
  if (!e.target.matches('.list__item-delete-btn')) return;

  const { id } = e.target.parentElement.firstChild.dataset;

  deleteTask(id)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
