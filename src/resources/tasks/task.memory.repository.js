import { Task } from "./task.model.js";

export const getAll = async (boardId) => {
  const tasks =  await Task.getAll(boardId);

  return tasks;
};

export const get = async (id) => {
  try {
    const task = await Task.getTaskById(id);
  
    return task;
  } catch (error) {
    return error;
  }
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
  try {
    return await Task.delete(id);
  } catch (error) {
    return error;
  }
};

export const removeAllById = async (id) => {
  try {
    return await Task.deleteManyById(id);
  } catch (error) {
    return error;
  }
};

export const unsubscribe = async (userId) => {
  try {
    const tasks = await Task.getAll(userId, 'userId');
    return await tasks.forEach(async task => {
      await Task.delete(task.id);
      await new Task({ ...task, userId: null }).save();
    });
  } catch (error) {
    return error;
  }
};
