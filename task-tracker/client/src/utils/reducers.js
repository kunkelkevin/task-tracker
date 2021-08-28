import { useReducer } from "react";
import {
  ADD_CUSTOMER,
  EDIT_CUSTOMER,
  DELETE_CUSTOMER,
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  ADD_TASK_LOG,
  EDIT_TASK_LOG,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {
        ...state,
        customer: [...state.customer, ...action.customer],
      };

    case EDIT_CUSTOMER:
      return {
        ...state,
        customer: [...state.customer, action.customer],
      };

    case DELETE_CUSTOMER:
      let newCustomerState = state.customer.filter((customer) => {
        return customer._id !== action._id;
      });
      return {
        ...state,
        customer: newCustomerState,
      };

    case ADD_PROJECT:
      return {
        ...state,
        project: [...state.project, ...action.project],
      };

    case EDIT_PROJECT:
      return {
        ...state,
        project: [...state.project, action.project],
      };

    case DELETE_PROJECT:
      let newProjectState = state.project.filter((project) => {
        return project._id !== action._id;
      });
      return {
        ...state,
        project: newProjectState,
      };

    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, ...action.task],
      };

    case EDIT_TASK:
      return {
        ...state,
        task: [...state.task, action.task],
      };

    case DELETE_TASK:
      let newTaskState = state.task.filter((task) => {
        return task._id !== action._id;
      });
      return {
        ...state,
        task: newTaskState,
      };

    case ADD_TASK_LOG:
      return {
        ...state,
        task_log: [...state.task_log, action.task_log],
      };

    case EDIT_TASK_LOG:
      return {
        ...state,
        task_log: [...state.task_log, action.task_log],
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
