import React from "react";
import { useSelector } from "react-redux";
import { userSelecter } from "stores/user";

function Test() {
  const user = useSelector(userSelecter);

  return <div>유저 이름:{user.userName}</div>;
}

export default Test;
