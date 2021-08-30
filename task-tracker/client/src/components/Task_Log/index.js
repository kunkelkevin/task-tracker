import React, {useState} from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { useMutation } from "@apollo/react-hooks";
import { ADD_TASK_LOG, EDIT_TASK_LOG } from "../../utils/mutations";

function Task_Log(item) {
  const [state] = useStoreContext();

  const { duration_minutes, _id, taskId } = item;
  console.log(item);

  const [addTaskLog] = useMutation(ADD_TASK_LOG);
  const [inputState, setInputState] = useState({duration: 0});
  const [time, setTime] = useState(duration_minutes);
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
    console.log(inputState.duration,taskId);
    // event.preventDefault();
    const mutationResponse = await addTaskLog({
      variables: {
        duration_minutes: parseInt(inputState.duration),
        task: taskId,
      },
    });
    console.log(mutationResponse);
  };
  console.log(time);

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
      <button onClick={handleClick}>{{ time } ? "Enter" : "Update"}</button>
    </>
  );
}

export default Task_Log;
