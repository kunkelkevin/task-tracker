import React, { useEffect } from "react";
import Customer from "../Customer";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_CUSTOMER, ADD_PROJECT, ADD_TASK } from "../../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ALL } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";

function CustomerList() {
  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_ALL);

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
      data.customer.forEach((customer) => {
        idbPromise("customer", "put", customer);
      });
      data.project.forEach((project) => {
        idbPromise("project", "put", project);
      });
      data.task.forEach((task) => {
        idbPromise("task", "put", task);
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
