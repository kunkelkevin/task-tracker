import gql from 'graphql-tag';

export const QUERY_USER = gql`
query user($_id: ID){
  user (_id: $_id){
    firstName
    lastName
  }
}
`;

export const QUERY_CUSTOMER = gql`
query customer($_id: ID){
  customer (_id: $_id){
    _id
    name
  }
}
`;

export const QUERY_PROJECT = gql`
query project($_id: ID){
  project (_id: $_id){
    _id
    name
    customer {
      name
    }
  }
}
`;

export const QUERY_TASK = gql`
query task($_id: ID){
  task (_id: $_id){
    _id
    description
    project {
      name
    }
  }
}
`;

export const QUERY_TASK_LOG = gql`
query task_log($_id: ID){
  task_log (_id: $_id){
    _id
    duration_minutes
    task {
      description
    }
    user {
      firstName
      lastName
    }
  }
}
`;