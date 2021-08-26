const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Customer {
    _id: ID
    name: String
  }

  type Project {
    _id: ID
    name: String
    customer: Customer
  }

  type Task {
    _id: ID
    description: String
    project: Project
  }

  type TaskLog {
    _id: ID
    duration_minutes: Int
    task: Task
    user: User
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(_id: ID): User
    customer(_id: ID): Customer
    project(_id: ID): Project
    task(_id: ID): Task
    task_log(_id: ID): TaskLog
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCustomer(name: String!): Customer
    editCustomer(name: String!): Customer
    deleteCustomer(_id: ID!): Customer
    addProject(name: String!, customer: ID!):Project
    editProject(name: String!):Project
    deleteProject(_id: ID!):Project
    addTask(description: String!, project: ID!):Task
    editTask(description: String!):Task
    deleteTask(_id: ID!):Task
    addTaskLog(duration_minutes: Int!, task: ID!, user: ID!):TaskLog
    editTaskLog(duration_minutes: Int!):TaskLog
  }
`;

module.exports = typeDefs;
