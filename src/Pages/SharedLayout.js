import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./SharedComponent/Nav";
import styled from "styled-components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <Nav />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100dvh;
  border: 1px solid red;
`;
export default SharedLayout;
