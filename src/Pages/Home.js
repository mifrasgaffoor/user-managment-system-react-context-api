import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./Home.css";

const Home = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const { AddUser } = useContext(GlobalContext);
  const handleUser = (event) => {
    if (
      user.name === "" ||
      user.email === "" ||
      user.mobile === "" ||
      user.address === ""
    ) {
      alert("Please Enter all input field!!!");
      return;
    }
    event.preventDefault();
    AddUser(user);
    setUser({
      name: "",
      email: "",
      mobile: "",
      address: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  console.log(user);
  return (
    <div className="home__container">
      <h1>User Data</h1>

      <form>
        <input
          placeholder="Name"
          value={user.name}
          name="name"
          onChange={handleChange}
        />

        <br />
        <input
          placeholder="Email"
          value={user.email}
          name="email"
          onChange={handleChange}
        />

        <br />
        <input
          placeholder="Mobile"
          type="Mobile No"
          value={user.mobile}
          name="mobile"
          onChange={handleChange}
        />
        <br />

        <textarea
          placeholder="Address"
          value={user.address}
          name="address"
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="btbtn" onClick={handleUser}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
