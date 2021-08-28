import React from "react";
// import Task from "../Task";
import { useStoreContext } from "../../utils/GlobalState";

function Task(item) {
  const [state] = useStoreContext();

  const { description, _id } = item;

  console.log(state);
  //   const filteredTasks = () => {
  //     if (!_id) {
  //       return state.task;
  //     }
  //     return state.task.filter((task) => {
  //       return task.customer._id === _id;
  //     });
  //   };
  //   console.log(filteredTasks());

  return (
    <li>
      {description}
      {/* <ul>
        {filteredTasks().map((task) => (
          <task key={task._id} _id={task._id} name={task.name}></task>
        ))}
      </ul> */}
    </li>
  );
}

export default Task;
