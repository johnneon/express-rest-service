import { User } from "./user.model.js";

const getAll = async () => {
  const users = User.getAll();

  return users;
};

const getUserById = async (id) => {
  const user = User.getUserById(id);

  return user;
};

const createUser = ({ login, name, password }) => {
  try {
    const user = new User({login, name, password});

    user.save();

    return user;
  } catch (error) {
    return error;
  }
};

const updateUserById = (body) => {
  try {
    const user = User.findByIdAndUpdate(body);

    return user;
  } catch (error) {
    return error;
  }
};

const deleteUserById = async (id) => {
  await User.delete(id);
};

export default {
  getAll,
  createUser,
  getUserById,
  deleteUserById,
  updateUserById,
};
