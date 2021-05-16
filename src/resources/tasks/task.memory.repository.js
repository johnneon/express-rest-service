import { Task } from "./task.model.js";

export const getAll = async (boardId) => {
  const tasks =  await Task.getAll(boardId);

  return tasks;
};

export const get = async (id) => {
  const task = await Task.getTaskById(id);

  return task;
};

export const save = async (body) => {
  try {
    const task = new Task(body);

    await task.save();

    return task;
  } catch (error) {
    return error;
  }
};

export const update = async (body) => {
  try {
    await Task.delete(body.id);
    const task = new Task(body);

    task.save();

    return task;
  } catch (error) {
    return error;
  }
};

export const remove = async (id) => {
  await Task.delete(id);
};

export const removeAllById = async (id) => {
  await Task.deleteManyById(id);
};

export const unsubscribe = async (userId) => {
  const tasks = await Task.getAll(userId, 'userId');
  await tasks.forEach(async task => {
    await Task.delete(task.id);
    await new Task({ ...task, userId: null }).save();
  });
};
