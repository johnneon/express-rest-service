import * as tasksRepo from './task.memory.repository.js';

export const getAll = (id) => tasksRepo.getAll(id);

export const get = ({ params }) => tasksRepo.get(params.id);

export const save = ({ body, boardId }) => tasksRepo.save({ ...body, boardId});

export const update = ({ body, params, boardId }) => 
  tasksRepo.update({ ...body, id: params.id, boardId });

export const remove = ({ params }) => tasksRepo.remove(params.id);

export const removeAllById = (boardId) => tasksRepo.removeAllById(boardId);

export const unsubscribe = (userId) => tasksRepo.unsubscribe(userId);
