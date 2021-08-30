import gql from "graphql-tag";

export const QUERY_ALL = gql`
  query allData {
    customer {
      _id
      name
    }
    project {
      _id
      name
      customer {
        _id
      }
    }
    task {
      _id
      description
      project {
        _id
      }
    }
    task_log {
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

export const QUERY_USER = gql`
  query user($_id: ID) {
    user(_id: $_id) {
      firstName
      lastName
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      firstName
      lastName
    }
  }
`;

export const QUERY_CUSTOMER = gql`
  query customer($_id: ID) {
    customer(_id: $_id) {
      _id
      name
    }
  }
`;

export const QUERY_PROJECT = gql`
  query project($_id: ID) {
    project(_id: $_id) {
      _id
      name
      customer {
        _id
        name
      }
    }
  }
`;

export const QUERY_TASK = gql`
  query task($_id: ID) {
    task(_id: $_id) {
      _id
      description
      project {
        _id
        name
      }
    }
  }
`;

export const QUERY_TASK_LOG = gql`
  query task_log($_id: ID) {
    task_log(_id: $_id) {
      _id
      duration_minutes
      task {
        _id
        description
      }
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;
