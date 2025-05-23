import React, { useEffect } from "react";
// import { users } from "../Utils/Users";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Context } from "../context/Provider";

const Employee = () => {
  // const [users, setUsers] = useState();

  const { users } = Context();

  console.log(typeof users);

  const checkStatus = function (user) {
    const tasks = [];
    let taskStatus = "";
    for (const key in user.tasks) {
      tasks.push(user.tasks[key]);
    }

    if (tasks.includes(true && false)) {
      taskStatus = "in progress";
    }

    if (!tasks.includes(false)) {
      taskStatus = "completed";
    }

    if (!tasks.includes(true)) {
      taskStatus = "not started";
    }
    return taskStatus;
  };

  useEffect(() => {
    // const users = localStorage.getItem("users");
    // console.log(users);
  });

  return (
    <Wrapper>
      <p>list of employees</p>
      <table className="table">
        <thead>
          <tr>
            <th>name</th>
            <th>department</th>
            <th>status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            const status = checkStatus(user);

            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.department}</td>
                <td
                  className={
                    status === "in progress"
                      ? "progress"
                      : status === "completed"
                      ? "completed"
                      : "not_started"
                  }
                >
                  {status}
                </td>
                <td>
                  <Link to={`/update/${index}`}>Update Employee</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
  flex-direction: column;

  padding-top: 2rem;
  .table {
    /* border: 1px solid red; */
    width: 80%;
  }

  tr {
    display: flex;
    justify-content: space-between;
    /* width: 80%; */
    /* border: 1px solid red; */
  }

  .completed {
    color: green;
  }

  .not_started {
    color: red;
  }

  .progress {
    color: pink;
  }

  a {
    text-transform: capitalize;
    color: black;
    text-decoration: none;
  }
  th,
  td {
    text-align: left;
    border: 1px solid red;
    width: 100%;
  }
`;
export default Employee;
