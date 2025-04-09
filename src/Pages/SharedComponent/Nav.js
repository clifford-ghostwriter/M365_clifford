import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Wrapper>
      <div className="link_container">
        <Link to="/">create employee page</Link>
        <Link to="/employees">see all employees page</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: black;
  .link_container {
    display: flex;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-block: 1rem;

    a {
      color: white;
      text-decoration: none;
      /* height: 5rem; */
      align-items: end;

      text-transform: capitalize;
    }
  }
`;
export default Nav;
