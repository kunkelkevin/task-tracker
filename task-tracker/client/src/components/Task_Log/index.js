import React, { useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { useMutation } from "@apollo/react-hooks";
import { ADD_TASK_LOG, EDIT_TASK_LOG } from "../../utils/mutations";
import { idbPromise } from "../../utils/helpers";

function Task_Log(item) {
  const [state, dispatch] = useStoreContext();

  const { taskId } = item;

  const [addTaskLog] = useMutation(ADD_TASK_LOG);
  const [editTaskLog] = useMutation(EDIT_TASK_LOG);

  const [inputState, setInputState] = useState({ duration: 0 });
  const [taskLogId, setTaskLogId] = useState(item._id);
  const [time, setTime] = useState(item.duration_minutes);
  //   const filteredTasks = () => {
  //     if (!_id) {
  //       return state.task;
  //     }
  //     return state.task.filter((task) => {
  //       return task.customer._id === _id;
  //     });
  //   };
  //   console.log(filteredTasks());
  const handleClick = async (event) => {
    setTime(inputState.duration);
    if (!time) {
      console.log("adding");
      // event.preventDefault();
      const newTaskLog = await addTaskLog({
        variables: {
          duration_minutes: parseInt(inputState.duration),
          task: taskId,
        },
      });
      setTaskLogId(newTaskLog.data.addTaskLog._id);

      dispatch({
        type: EDIT_TASK_LOG,
        task_log: newTaskLog.data.addTaskLog,
      });
      idbPromise("task_log", "put", newTaskLog.data.addTaskLog);
    } else {
      console.log("updating");
      const updatedTaskLog = await editTaskLog({
        variables: {
          _id: taskLogId,
          duration_minutes: parseInt(inputState.duration),
        },
      });
      console.log(updatedTaskLog);
      dispatch({
        type: EDIT_TASK_LOG,
        task_log: updatedTaskLog.data.addTaskLog,
      });
      //   idbPromise("task_log", "put", updatedTaskLog.data.addTaskLog);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  return (
    <>
      <input
        type="text"
        name="duration"
        onChange={handleChange}
        defaultValue={time}
      ></input>
      <button onClick={handleClick}>{time ? "Update" : "Enter"}</button>
    </>
  );
}

export default Task_Log;
