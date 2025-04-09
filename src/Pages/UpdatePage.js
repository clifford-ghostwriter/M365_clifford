import React from "react";
import { useParams } from "react-router-dom";

const UpdatePage = () => {
  const { userid } = useParams();

  console.log(userid);

  return <div>update</div>;
};

export default UpdatePage;
