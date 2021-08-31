// import React, { useEffect } from "react";
// import Customer from "../Customer";
// import { useStoreContext } from "../../utils/GlobalState";
// import {
//   ADD_CUSTOMER,
//   ADD_PROJECT,
//   ADD_TASK,
//   ADD_TASK_LOG,
// } from "../../utils/actions";
// import { useQuery } from "@apollo/react-hooks";
// import { QUERY_TASK_LOG } from "../../utils/queries";
// import { idbPromise } from "../../utils/helpers";
// import spinner from "../../assets/spinner.gif";
// import { useMutation } from "@apollo/react-hooks";
// import { DELETE_TASK } from "../../utils/mutations";

// function AllData() {
//   const [state, dispatch] = useStoreContext();

//   const { data, loading } = useQuery(QUERY_TASK_LOG);
//   const [deleteTasks] = useMutation(DELETE_TASK);

//   const clickHandler = async (e) => {
//     const tasksToRemove = [
//       "612d82cd0c88762398652e1d",
//       "612d82cd0c88762398652e1e",
//     ];
//     for (let i = 0; i < tasksToRemove.length; i++) {
//       await deleteTasks({
//         variables: { _id: tasksToRemove[i] },
//       });
//     }
//   };

//   //   useEffect(() => {
//   //     if (data) {
//   //       console.log(data);

//   //     }
//   //   }, [data, loading, dispatch]);

//   return (
//     <div className="my-2">
//       <h3>This is a test page</h3>
//       <button onClick={clickHandler}>here</button>
//     </div>
//   );
// }

// export default AllData;
