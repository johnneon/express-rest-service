import { Task } from "./task.model.js";

const getAll = async () => {
  const tasks = Task.getAll();

  return tasks;
};

const getTaskById = async (id) => {
  const task = Task.getTaskById(id);

  return task;
};

const createTask = ({ title, columns }) => {
  try {
    const task = new Task({ title, columns });

    task.save();

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

export default {
  getAll,
  createTask,
  getTaskById,
  deleteTaskById,
  updateTaskById,
};
