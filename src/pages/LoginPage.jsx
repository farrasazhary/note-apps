/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/loginInput";
import { login } from "../utils/api";
import { useNavigate } from "react-router-dom";

function LoginPage({ loginSuccess }) {
  const navigate = useNavigate();
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
      navigate("/");
    }
  }

  return (
    <section className="login-page">
      <h2>Silahkan login</h2>
      <LoginInput login={onLogin} />
      <p>
        Belum punya akun?{" "}
        <Link to="/register" className="text-orange-600">
          Daftar di sini
        </Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
