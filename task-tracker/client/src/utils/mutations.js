import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_CUSTOMER = gql`
  mutation addCustomer($name: String!) {
    addCustomer(name: $name) {
      name
    }
  }
`;

export const EDIT_CUSTOMER = gql`
  mutation editCustomer($name: String!, $_id: ID!) {
    editCustomer(name: $name, _id: $_id) {
      _id
      name
    }
  }
`;

export const DELETE_CUSTOMER = gql`
  mutation deleteCustomer($_id: ID!) {
    deleteCustomer(_id: $_id) {
      _id
      name
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject($name: String!, $customer: ID!) {
    addProject(name: $name, customer: $customer) {
      name
      customer
    }
  }
`;

export const EDIT_PROJECT = gql`
  mutation editProject($name: String!, $_id: ID!) {
    editProject(name: $name, _id: $_id) {
      _id
      name
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($_id: ID!) {
    deleteProject(_id: $_id) {
      _id
      name
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask($description: String!, $project: ID!) {
    addTask(description: $description) {
      description
      project
    }
  }
`;

export const EDIT_TASK = gql`
  mutation editTask($description: String!, $_id: ID!) {
    editTask(description: $description, _id: $_id) {
      _id
      description
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($_id: ID!) {
    deleteTask(_id: $_id) {
      _id
      description
    }
  }
`;

export const ADD_TASK_LOG = gql`
  mutation addTaskLog($duration_minutes: Int!, $task: ID!) {
    addTaskLog(duration_minutes: $duration_minutes, task: $task) {
      _id
      duration_minutes
      task {
        _id
      }
      user {
        _id
      }
    }
  }
`;

export const EDIT_TASK_LOG = gql`
  mutation editTaskLog($duration_minutes: Int!, $_id: ID!) {
    editTaskLog(duration_minutes: $duration_minutes, _id: $_id) {
      _id
      duration_minutes
      task {
        _id
      }
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
