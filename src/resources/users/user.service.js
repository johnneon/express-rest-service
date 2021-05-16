import { unsubscribe } from '../tasks/task.service.js';
import * as userRepo from './user.memory.repository.js';

const getAll = () => userRepo.getAll();

const get = (id) => userRepo.get(id);

const save = ({ body }) => userRepo.save(body);

const update = ({ body, params }) => userRepo.update({ id: params.id, ...body });

const remove = async (id) => {
  await userRepo.remove(id);
  await unsubscribe(id);
};

export {
  getAll,
  get,
  save,
  update,
  remove,
};
