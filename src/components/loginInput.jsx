import React, { useState } from "react";
import PropTypes from "prop-types";

function LoginInput({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({ email, password });
  };

  return (
    <form
      action=""
      onSubmit={onSubmitHandler}
      className="login register flex flex-col gap-2 my-5"
    >
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
        Masuk
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
