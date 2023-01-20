import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/connexion_page.scss";
import { AuthContext } from "./AuthContext";

export default function ConnexionPage() {
  const { setAuth } = useContext(AuthContext);
  const [errorInput, setErrorInput] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleLogin = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        const { token, user } = res.data;
        if (token) {
          setAuth((oldAuth) => ({
            ...oldAuth,
            isAuthenticated: true,
            token,
            id: user.id,
            role: user.role,
            consultantId: user.consultant_id,
            candidateId: user.candidate_id,
          }));
          navigate("/");
        } else {
          setErrorInput(true);
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <section className="connexion">
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="text" />

        <label htmlFor="password">Password</label>
        <input ref={passwordRef} type="password" />

        <button type="submit">Connexion</button>
        {errorInput && <p className="alert">Email ou mot de passe incorrect</p>}
      </form>
      <nav>
        <Link to="/createaccount/candidate">
          <button type="button"> Creer un compte candidat</button>
        </Link>
        <Link to="/createaccount/consultant">
          <button type="button"> Creer un compte consultant</button>
        </Link>
      </nav>
    </section>
  );
}
