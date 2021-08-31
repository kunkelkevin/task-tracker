import React from "react";
import Task_Log from "../Task_Log";
import { useStoreContext } from "../../utils/GlobalState";
import Auth from "../../utils/auth";

function Task(item) {
  const [state] = useStoreContext();

  const { description, _id } = item;

  const filteredTask_Log = () => {
    if (!_id || !state.task_log[0]) {
      return state.task_log;
    }
    return state.task_log.filter((task_log) => {
      return (
        task_log.task._id === _id &&
        task_log.user._id === Auth.getProfile().data._id
      );
    });
  };
  return (
    <li>
      {description}
      {Auth.loggedIn() && (
        <Task_Log
          _id={filteredTask_Log()[0]?._id}
          duration_minutes={filteredTask_Log()[0]?.duration_minutes}
          taskId={_id}
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
