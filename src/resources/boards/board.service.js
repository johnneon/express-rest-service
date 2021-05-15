import boardsRepo from './board.memory.repository.js';
import { deleteManyById } from '../tasks/task.service.js';

const getAll = () => boardsRepo.getAll();

const getBoardById = (id) => boardsRepo.getBoardById(id);

const createBoard = ({ body }) => boardsRepo.createBoard(body);

const updateBoardById = ({ body, params }) => boardsRepo.updateBoardById({ id: params.id, ...body });

const deleteBoardById = async (id) => {
  await boardsRepo.deleteBoardById(id)
  await deleteManyById(id);
};

export {
  getAll,
  createBoard,
  getBoardById,
  deleteBoardById,
  updateBoardById,
};
