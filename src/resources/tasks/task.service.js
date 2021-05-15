import tasksRepo from './task.memory.repository.js';

const getAll = (id) => tasksRepo.getAll(id);

const getTaskById = ({ params }) => tasksRepo.getTaskById(params.id);

const createTask = ({ body, boardId }) => tasksRepo.createTask({ ...body, boardId});

const updateTaskById = ({ body, params, boardId }) => 
  tasksRepo.updateTaskById({ ...body, id: params.id, boardId });

const deleteTaskById = ({ params }) => tasksRepo.deleteTaskById(params.id);

const deleteManyById = (boardId) => tasksRepo.deleteManyById(boardId);

const unsubscribe = (userId) => tasksRepo.unsubscribe(userId);

export {
  getAll,
  createTask,
  getTaskById,
  deleteTaskById,
  updateTaskById,
  deleteManyById,
  unsubscribe
};
