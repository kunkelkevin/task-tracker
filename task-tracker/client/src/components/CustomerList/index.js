import React, { useEffect } from "react";
import Customer from "../Customer";
import { useStoreContext } from "../../utils/GlobalState";
import {
  ADD_CUSTOMER,
  ADD_PROJECT,
  ADD_TASK,
  ADD_TASK_LOG,
} from "../../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ALL } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";

function CustomerList() {
  const [state, dispatch] = useStoreContext();

  const { data, loading } = useQuery(QUERY_ALL);

  useEffect(() => {
    if (data) {
      dispatch({
        type: ADD_CUSTOMER,
        customer: data.customer,
      });
      dispatch({
        type: ADD_PROJECT,
        project: data.project,
      });
      dispatch({
        type: ADD_TASK,
        task: data.task,
      });
      dispatch({
        type: ADD_TASK_LOG,
        task_log: data.task_log,
      });
      // idbPromise("me","put", data.me);
      data.customer.forEach((customer) => {
        idbPromise("customer", "put", customer);
      });
      data.project.forEach((project) => {
        idbPromise("project", "put", project);
      });
      data.task.forEach((task) => {
        idbPromise("task", "put", task);
      });
      data.task_log.forEach((task_log) => {
        idbPromise("task_log", "put", task_log);
      });
    } else if (!loading) {
      idbPromise("customer", "get").then((customer) => {
        dispatch({
          type: ADD_CUSTOMER,
          customer: customer,
        });
      });
      idbPromise("project", "get").then((project) => {
        dispatch({
          type: ADD_PROJECT,
          project: project,
        });
      });
      idbPromise("task", "get").then((task) => {
        dispatch({
          type: ADD_TASK,
          task: task,
        });
      });
      idbPromise("task_log", "get").then((task_log) => {
        dispatch({
          type: ADD_TASK_LOG,
          task: task_log,
        });
      });
    }
  }, [data, loading, dispatch]);

  return (
    <div className="my-2">
      <h3>Customers</h3>
      {state.customer.length ? (
        <ul>
          {state.customer.map((customer) => (
            <Customer
              key={customer._id}
              _id={customer._id}
              name={customer.name}
            ></Customer>
          ))}
        </ul>
      ) : (
        <h3>You don't have any customers yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default CustomerList;
