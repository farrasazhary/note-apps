// /* eslint-disable no-unused-vars */
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import RegisterInput from "../components/registerInput";
// import { register } from "../utils/api";

// function RegisterPage() {
//   const navigate = useNavigate();
//   async function onRegisterHandler(user) {
//     const { error } = await register(user);
//     if (!error) {
//       navigate("/");
//     }
//   }

//   return (
//     <section className="register-page">
//       <h2>Daftar akun baru</h2>
//       <RegisterInput register={onRegisterHandler} />
//       <p>
//         kembali ke <Link to="/">Masuk</Link>
//       </p>
//     </section>
//   );
// }

// export default RegisterPage;

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/registerInput";
import { register } from "../utils/api";

function RegisterPage() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (error) {
      setError(error);
    } else {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <h2>Daftar akun baru</h2>
      {error && <p>{error}</p>}
      <RegisterInput register={onRegisterHandler} />
      <p>
        kembali ke{" "}
        <Link to="/" className="text-orange-600">
          Masuk
        </Link>
      </p>
    </section>
  );
}

export default RegisterPage;
