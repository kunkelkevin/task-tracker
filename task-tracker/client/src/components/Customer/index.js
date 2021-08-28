import React from "react";
import Project from "../Project";
import { useStoreContext } from "../../utils/GlobalState";

function Customer(item) {
  const [state] = useStoreContext();

  const { name, _id } = item;
  const filteredProjects = () => {
    if (!_id) {
      return state.project;
    }
    return state.project.filter((project) => {
      return project.customer._id === _id;
    });
  };
  console.log(filteredProjects());

  return (
    <li>
      {name}
      <ul>
        {filteredProjects().map((project) => (
          //   <p>{project.name}</p>
          <Project
            key={project._id}
            _id={project._id}
            name={project.name}
          ></Project>
        ))}
      </ul>
    </li>
  );
}

export default Customer;
