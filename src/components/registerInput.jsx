/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";

function RegisterInput({ register }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    register({ name, email, password });
  };

  return (
    <form
      action=""
      onSubmit={onSubmitHandler}
      className="register flex flex-col gap-2 my-5"
    >
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={onNameChangeHandler}
        className="rounded-md p-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChangeHandler}
        className="rounded-md p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChangeHandler}
        className="rounded-md p-2"
      />
      <button type="submit" className="bg-orange-600 rounded-md p-2">
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
