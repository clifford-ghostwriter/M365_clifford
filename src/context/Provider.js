import React, { useContext, useReducer } from "react";
import { reducer } from "./Reducer";
import { getUsers } from "../Utils/localstorage";

const appContext = React.createContext();

const iniitialstate = {
  users: getUsers("users"),
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, iniitialstate);

  //   console.log(state);

  return (
    <appContext.Provider value={{ ...state }}>{children}</appContext.Provider>
  );
};

export const Context = () => {
  return useContext(appContext);
};
export default Provider;
