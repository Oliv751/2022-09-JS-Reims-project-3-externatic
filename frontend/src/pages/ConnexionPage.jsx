import Header from "@components/Header";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/connexion_page.scss";

export default function ConnexionPage() {
  return (
    <section className="connexion">
      <Header />
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="text" />

        <label htmlFor="password">Password</label>
        <input type="password" />

        <button type="button">Connexion</button>
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
