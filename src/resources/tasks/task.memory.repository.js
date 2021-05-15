import { Task } from "./task.model.js";

const getAll = async (boardId) => {
  const tasks =  await Task.getAll(boardId);

  return tasks;
};

const getTaskById = async (id) => {
  const task = await Task.getTaskById(id);

  return task;
};

const createTask = async (body) => {
  try {
    const task = new Task(body);

    await task.save();

    return task;
  } catch (error) {
    return error;
  }
};

const updateTaskById = async (body) => {
  try {
    await Task.delete(body.id);
    const task = new Task(body);

    task.save();

    return task;
  } catch (error) {
    return error;
  }
};

const deleteTaskById = async (id) => {
  await Task.delete(id);
};

const deleteManyById = async (id) => {
  await Task.deleteManyById(id);
};

const unsubscribe = async (userId) => {
  const tasks = await Task.getAll(userId, 'userId');
  await tasks.forEach(async task => {
    await Task.delete(task.id);
    await new Task({ ...task, userId: null }).save();
  });
};

export default {
  getAll,
  createTask,
  getTaskById,
  deleteTaskById,
  deleteManyById,
  updateTaskById,
  unsubscribe,
};
