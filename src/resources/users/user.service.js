import usersRepo from './user.memory.repository.js';

const getAll = () => usersRepo.getAll();

export { getAll };
