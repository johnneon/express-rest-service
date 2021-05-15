import tasksRepo from './task.memory.repository.js';

const getAll = () => tasksRepo.getAll();

const getTaskById = (id) => tasksRepo.getTaskById(id);

const createTask = ({ body }) => tasksRepo.createTask(body);

const updateTaskById = ({ body, params }) => tasksRepo.updateTaskById({ id: params.id, ...body });

const deleteTaskById = (id) => tasksRepo.deleteTaskById(id);

export {
  getAll,
  createTask,
  getTaskById,
  deleteTaskById,
  updateTaskById,
};
