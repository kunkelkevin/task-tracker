const db = require("./connection");
const { User, Customer, Project, Task, TaskLog } = require("../models");

db.once("open", async () => {
  await TaskLog.deleteMany();
  await Customer.deleteMany();

  const customers = await Customer.insertMany([
    { name: "Mary Jane" },
    { name: "Dwayne Johnson" },
    { name: "John Adams" },
    { name: "Henry Kissinger" },
    { name: "Chris Chamberson" },
  ]);

  console.log("customers seeded");

  await Project.deleteMany();

  const projects = await Project.insertMany([
    {
      name: "Cool Project",
      customer: customers[0]._id,
    },

    {
      name: "Create Server",
      customer: customers[0]._id,
    },

    {
      name: "UI Update",
      customer: customers[0]._id,
    },

    {
      name: "Full Stack",
      customer: customers[1]._id,
    },

    {
      name: "Task Tracker",
      customer: customers[2]._id,
    },

    {
      name: "Database Expansion",
      customer: customers[3]._id,
    },

    {
      name: "Upate Readme",
      customer: customers[3]._id,
    },

    {
      name: "Movie search engine",
      customer: customers[3]._id,
    },

    {
      name: "Social Media Site",
      customer: customers[4]._id,
    },
  ]);

  console.log("projects seeded");

  await Task.deleteMany();

  const tasks = await Task.insertMany([
    {
      description: "write code",
      project: projects[0]._id,
    },
    {
      description: "update code",
      project: projects[0]._id,
    },
    {
      description: "edit code",
      project: projects[1]._id,
    },
    {
      description: "refactor code",
      project: projects[2]._id,
    },
    {
      description: "write code",
      project: projects[3]._id,
    },
    {
      description: "update code",
      project: projects[3]._id,
    },
    {
      description: "edit code",
      project: projects[4]._id,
    },
    {
      description: "refactor code",
      project: projects[4]._id,
    },
    {
      description: "write code",
      project: projects[4]._id,
    },
    {
      description: "update code",
      project: projects[5]._id,
    },
    {
      description: "edit code",
      project: projects[6]._id,
    },
    {
      description: "refactor code",
      project: projects[7]._id,
    },
  ]);

  process.exit();
});
