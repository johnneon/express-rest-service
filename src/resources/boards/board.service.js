import * as boardsRepo from './board.memory.repository.js';
import { removeAllById } from '../tasks/task.service.js';

export const getAll = () => boardsRepo.getAll();

export const get = (id) => boardsRepo.get(id);

export const save = ({ body }) => boardsRepo.save(body);

export const update = ({ body, params }) => boardsRepo.update({ id: params.id, ...body });

export const remove = async (id) => {
  await boardsRepo.remove(id);
  await removeAllById(id);
};

