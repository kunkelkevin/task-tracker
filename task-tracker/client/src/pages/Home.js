import React from "react";
import CustomerList from "../components/CustomerList";
import Auth from "../utils/auth";

const Home = () => {
  return (
    <div className="container">
      {Auth.loggedIn() ? (
        <p>Input or update the time you worked on each task in minutes.</p>
      ) : (
        <p>(log in to interact)</p>
      )}
      <CustomerList></CustomerList>
    </div>
  );
};

export default Home;
