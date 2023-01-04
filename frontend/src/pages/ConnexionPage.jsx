import axios from "axios";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/connexion_page.scss";

export default function ConnexionPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/login`, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((response) => {
        console.warn(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="connexion">
      <Header />
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="text" />

        <label htmlFor="password">Password</label>
        <input ref={passwordRef} type="password" />

        <button type="submit">Connexion</button>
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
