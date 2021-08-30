import React from "react";
import { useStoreContext } from "../../utils/GlobalState";

function Task_Log(item) {
  const [state] = useStoreContext();

  const { duration_minutes, _id } = item;

  console.log("logs", duration_minutes, state);
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
    <>
      <input
        type="text"
        name="duration"
        defaultValue={duration_minutes}
      ></input>
      <button>{{ duration_minutes } ? "Enter" : "Update"}</button>
    </>
  );
}

export default Task_Log;
