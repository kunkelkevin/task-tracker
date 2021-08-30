const { AuthenticationError } = require("apollo-server-express");
const { User, Customer, Project, Task, TaskLog } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        console.log(context.user);
        const userData = await user
          .findOne({
            _id: context.user._id,
          })
          .select("-__v -password");
        return userData;
      }
      console.log("didn't make it");
      throw new AuthenticationError("Not logged in");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    customer: async (parent, { _id }) => {
      const params = {};

      if (_id) {
        params._id = _id;
      }
      console.log(params);
      return await Customer.find(params);
    },
    project: async (parent, { _id }) => {
      const params = {};

      if (_id) {
        params._id = _id;
      }

      return await Project.find(params);
    },
    task: async (parent, { _id }) => {
      const params = {};

      if (_id) {
        params._id = _id;
      }

      return await Task.find(params);
    },
    task_log: async (parent, { _id }) => {
      const params = {};

      if (_id) {
        params._id = _id;
      }

      return await TaskLog.find(params);
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addCustomer: async (parent, args) => {
      return await Customer.create(args);
    },

    editCustomer: async (parent, args) => {
      return await Customer.findByIdAndUpdate(args._id, args, { new: true });
    },

    deleteCustomer: async (parent, { _id }) => {
      return await Customer.findByIdAndDelete(_id);
    },

    addProject: async (parent, args) => {
      return await Project.create(args);
    },

    editProject: async (parent, args) => {
      return await Project.findByIdAndUpdate(args._id, args, { new: true });
    },

    deleteProject: async (parent, { _id }) => {
      return await Project.findByIdAndDelete(_id);
    },

    addTask: async (parent, args) => {
      return await Task.create(args);
    },

    editTask: async (parent, args) => {
      return await Task.findByIdAndUpdate(args._id, args, { new: true });
    },

    deleteTask: async (parent, { _id }) => {
      return await Task.findByIdAndDelete(_id, args);
    },

    addTaskLog: async (parent, args, context) => {
      if (context.user) {
        params = { ...args };
        params.user = context.user._id;
        return await TaskLog.create(params);
      }

      throw new AuthenticationError("Not Logged in");
    },

    editTaskLog: async (parent, args, context) => {
      if (context.user) {
        return await TaskLog.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not Logged in");
    },
  },
};

module.exports = resolvers;
