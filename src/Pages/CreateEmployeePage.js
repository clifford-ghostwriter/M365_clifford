import React, { useState } from "react";
import styled from "styled-components";

const CreateEmployeePage = () => {
  const [user, createUser] = useState({
    name: "",
    email: "",
    department: "",
    startDate: "",
  });

  const onChange = function (e) {
    const name = e.target.name;
    const value = e.target.value;
    createUser({ ...user, [name]: value });
  };

  return (
    <Wrapper>
      <form action="" className="form">
        <input type="text" name="name" value={user.name} onChange={onChange} />
        <input type="text" name="email" value={user.email} />
        <input type="text" name="department" value={user.department} />
        <input type="text" name="startDate" value={user.startDate} />

        <button type="submit">create Employee</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .form {
    width: 50%;
    /* margin-inline: auto; */
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    /* height: 200px; */
  }

  input,
  button {
    height: 56px;
  }
`;
export default CreateEmployeePage;
