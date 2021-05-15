import usersRepo from './user.memory.repository.js';

const getAll = () => usersRepo.getAll();

const getUserById = (id) => usersRepo.getUserById(id);

const createUser = ({ body }) => usersRepo.createUser(body);

const updateUserById = ({ body, params }) => usersRepo.updateUserById({ id: params.id, ...body });

const deleteUserById = (id) => usersRepo.deleteUserById(id);

export {
  getAll,
  createUser,
  getUserById,
  deleteUserById,
  updateUserById,
};
