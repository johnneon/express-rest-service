import { unsubscribe } from '../tasks/task.service.js';
import usersRepo from './user.memory.repository.js';

const getAll = () => usersRepo.getAll();

const getUserById = (id) => usersRepo.getUserById(id);

const createUser = ({ body }) => usersRepo.createUser(body);

const updateUserById = ({ body, params }) => usersRepo.updateUserById({ id: params.id, ...body });

const deleteUserById = async (id) => {
  await usersRepo.deleteUserById(id);
  await unsubscribe(id);
};

export {
  getAll,
  createUser,
  getUserById,
  deleteUserById,
  updateUserById,
};
