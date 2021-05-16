import { User } from "./user.model.js";

export const getAll = async () => {
  const users = User.getAll();

  return users;
};

export const get = async (id) => {
  try {
    const user = User.getUserById(id);
  
    return user;
  } catch (error) {
    return error;
  }
};

export const save = ({ login, name, password }) => {
  try {
    const user = new User({login, name, password});

    user.save();

    return user;
  } catch (error) {
    return error;
  }
};

export const update = async (body) => {
  try {
    await User.delete(body.id);
    const user = new User(body);

    user.save();

    return user;
  } catch (error) {
    return error;
  }
};

export const remove = async (id) => {
  try {
    return await User.delete(id);
  } catch (error) {
    return error;
  }
};
