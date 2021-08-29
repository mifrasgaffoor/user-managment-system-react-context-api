import React from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import "./Home.css";

const Contact = () => {
  const { users, deleteUser } = useContext(GlobalContext);
  console.log(users);

  return (
    <div>
      <h1>Contact for user details</h1>

      {users.map((user, index) => {
        return (
          <div key={index} className="container">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.contact}</p>
            <p>{user.address}</p>
            <button onClick={() => deleteUser(index)} className="btn">
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
