import React from "react";
import Task from "../Task";
import { useStoreContext } from "../../utils/GlobalState";

function Project(item) {
  const [state] = useStoreContext();

  const { name, _id } = item;
  console.log(name, _id);

  console.log(state);
  const filteredTasks = () => {
    if (!_id) {
      return state.task;
    }
    return state.task.filter((task) => {
      return task.project._id === _id;
    });
  };
  console.log("task", filteredTasks());

  return (
    <li>
      {name}
      <ul>
        {filteredTasks().map((task) => (
          <Task
            key={task._id}
            _id={task._id}
            description={task.description}
          ></Task>
        ))}
      </ul>
    </li>
  );
}

export default Project;
