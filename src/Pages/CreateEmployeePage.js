import React, { useState } from "react";
import styled from "styled-components";
// import { users } from "../Utils/Users";
import { Context } from "../context/Provider";
import { setUsers } from "../Utils/localstorage";

const CreateEmployeePage = () => {
  const { users } = Context();
  const [user, createUser] = useState({
    name: "",
    email: "",
    department: "",
    startDate: "",
  });

  const [loading, setLoading] = useState(false);

  const onChange = function (e) {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    createUser({ ...user, [name]: value });
  };

  const onsSubmit = async function (e) {
    e.preventDefault();
    setLoading(true);
    users.push({
      ...user,
      tasks: {
        SignNDA: false,
        submitId: false,
        setUpEmail: false,
        HrOrientation: false,
        companyTools: false,
        meetingWithManager: false,
      },
    });

    // const stringUsers = JSON.stringify(users);
    // localStorage.setItem();
    setUsers("users", users);

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    createUser({
      name: "",
      email: "",
      department: "",
      startDate: "",
    });
    setLoading(false);
    console.log(loading);
  };

  return (
    <Wrapper>
      <p>Create Employee </p>
      <form action="" className="form">
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={user.name}
          onChange={onChange}
          required={true}
        />
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={user.email}
          onChange={onChange}
          required={true}
        />
        <label htmlFor="department">department</label>
        <input
          type="text"
          id="department"
          name="department"
          value={user.department}
          onChange={onChange}
          required={true}
        />
        <label htmlFor="startDate">startDate</label>
        <input
          type="text"
          name="startDate"
          id="startDate"
          value={user.startDate}
          onChange={onChange}
          required={true}
        />

        <button type="submit" onClick={onsSubmit}>
          {loading ? "creating..." : "create Employee"}
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: black; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding-top: 1rem;
  height: 100%;
  flex-direction: column;

  .form {
    width: 50%;
    /* margin-inline: auto; */
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    /* height: 200px; */
    gap: 1rem;
  }

  label {
    text-transform: capitalize;
  }

  input,
  button {
    height: 36px;
  }
`;
export default CreateEmployeePage;
