import boardsRepo from './board.memory.repository.js';

const getAll = () => boardsRepo.getAll();

const getBoardById = (id) => boardsRepo.getBoardById(id);

const createBoard = ({ body }) => boardsRepo.createBoard(body);

const updateBoardById = ({ body, params }) => boardsRepo.updateBoardById({
  name: body.name,
  login: body.login,
  password: body.password,
  id: params.id,
});

const deleteBoardById = (id) => boardsRepo.deleteBoardById(id);

export {
  getAll,
  createBoard,
  getBoardById,
  deleteBoardById,
  updateBoardById,
};
