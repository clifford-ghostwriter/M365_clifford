import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../context/Provider";
import styled from "styled-components";
import { setUsers } from "../Utils/localstorage";

const UpdatePage = () => {
  const [userTasks, setUserTasks] = useState({
    SignNDA: false,
    submitId: false,
    setUpEmail: false,
    HrOrientation: false,
    companyTools: false,
    meetingWithManager: false,
  });
  const { userid } = useParams();
  const { users } = Context();
  const user = users[userid];
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onChange = function (e) {
    const name = e.target.name;
    // const value = e.target.value === "on" ? true : false;
    const value = !e.target.value;

    console.log(e.target, value);

    setUserTasks((userTasks) => {
      return { ...userTasks, [name]: value };
    });
  };

  // submit
  const onsSubmit = async function (e) {
    e.preventDefault();
    setLoading(true);
    // users.push();

    users[userid] = {
      ...user,
      tasks: {
        ...userTasks,
      },
    };
    setUsers("users", users);

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    setUserTasks({
      SignNDA: false,
      submitId: false,
      setUpEmail: false,
      HrOrientation: false,
      companyTools: false,
      meetingWithManager: false,
    });
    setLoading(false);
    console.log(loading);
    navigate("/employees");
  };

  return (
    <Wrapper>
      <div className="user_information">
        <p>
          <span>Name: </span>
          {user.name}
        </p>
        <p>
          <span>Department: </span>
          {user.department}
        </p>
      </div>
      <form className="form">
        <div className="input_item">
          <label htmlFor="SignNDA"> Sign NDA</label>
          <input
            type="checkbox"
            id="SignNDA"
            name="SignNDA"
            // value={}
            onChange={onChange}
          />
        </div>
        <div className="input_item">
          <label htmlFor="submitId"> submit Id</label>
          <input
            type="checkbox"
            id="submitId"
            name="submitId"
            value={userTasks.submitId}
            onChange={onChange}
          />
        </div>
        <div className="input_item">
          <label htmlFor=" setUpEmail"> setUp Email</label>
          <input
            type="checkbox"
            id="setUpEmail"
            name="setUpEmail"
            value={userTasks.setUpEmail}
            onChange={onChange}
          />
        </div>
        <div className="input_item">
          <label htmlFor=" HrOrientation"> Hr Orientation</label>
          <input
            type="checkbox"
            id="HrOrientation"
            name="HrOrientation"
            value={userTasks.HrOrientation}
            onChange={onChange}
          />
        </div>
        <div className="input_item">
          <label htmlFor="companyTools"> company Tools</label>
          <input
            type="checkbox"
            id="companyTools"
            name="companyTools"
            value={userTasks.companyTools}
            onChange={onChange}
          />
        </div>
        <div className="input_item">
          <label htmlFor="meetingWithManager"> meeting With Manager</label>
          <input
            type="checkbox"
            id="meetingWithManager"
            name="meetingWithManager"
            value={userTasks.meetingWithManager}
            onChange={onChange}
          />
        </div>

        <button type="submit" onClick={onsSubmit}>
          Update
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  .user_information {
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
    width: 40%;
    flex-direction: column;
  }
  .form {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 1rem;
    border: 1px solid red;
  }

  .input_item {
    display: flex;
    gap: 1rem;
  }

  label {
    text-transform: capitalize;
  }
`;
export default UpdatePage;
