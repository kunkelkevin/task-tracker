import React from "react";
import Task_Log from "../Task_Log";
import { useStoreContext } from "../../utils/GlobalState";
import Auth from "../../utils/auth";

function Task(item) {
  const [state] = useStoreContext();

  const { description, _id } = item;

  console.log(state);
  const filteredTask_Log = () => {
    console.log(_id, state.task_log);
    if (!_id || !state.task_log[0]) {
      return state.task_log;
    }
    return state.task_log.filter((task_log) => {
      console.log(task_log);
      return task_log.task._id === _id;
    });
  };
  // console.log(filteredTask_Log());

  return (
    <li>
      {description}
      {Auth.loggedIn() && (
        <Task_Log
          _id={filteredTask_Log()._id}
          duration_minutes={filteredTask_Log().duration_minutes}
        ></Task_Log>
      )}
      {/* <ul>
        {filteredTasks().map((task) => (
          <task key={task._id} _id={task._id} name={task.name}></task>
        ))}
      </ul> */}
    </li>
  );
}

export default Task;
