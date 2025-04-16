import React from "react";

const ValidPassword = () => <h1>Valid Pass </h1>;
const InvalidPassword = () => <h1>Invalid Pass </h1>;

const Password = ({ isValid }) => {
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

export default Password;
