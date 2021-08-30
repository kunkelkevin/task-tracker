import React from "react";
import Task_Log from "../Task_Log";
import { useStoreContext } from "../../utils/GlobalState";
import Auth from "../utils/auth";

function Task(item) {
  const [state] = useStoreContext();

  const { description, _id } = item;

  console.log(state);
  const filteredTask_Log = () => {
    if (!_id) {
      return state.task_log;
    }
    return state.task_log.filter((task_log) => {
      return task_log.task._id === _id;
    });
  };
  console.log(filteredTasks_Log());

  return (
    <li>
      {description}
      {/* {Auth.loggedIn() && (
        <Task_Log _id={filteredTask_Log}
        <p>Input or update the time you worked on each task in minutes.</p>
      ) } */}
      {/* <ul>
        {filteredTasks().map((task) => (
          <task key={task._id} _id={task._id} name={task.name}></task>
        ))}
      </ul> */}
    </li>
  );
}

export default Task;
