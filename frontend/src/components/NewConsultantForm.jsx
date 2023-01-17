import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewConsultantForm() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword && password.length) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/consultants`, {
          firstname: firstnameRef.current.value,
          lastname: lastnameRef.current.value,
          phone: phoneRef.current.value,
          email: emailRef.current.value,
          password,
          role: "consultant",
        })
        .then((reponse) => {
          if (reponse.status === 201) {
            navigate("/connexion");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setConfirmPassword("");
      setPassword("");

      alert("Erreur dans le mot de passe");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="firstname">Prénom</label>
        <input ref={firstnameRef} id="name" type="text" />
      </div>
      <div>
        <label htmlFor="lastname">Nom</label>
        <input ref={lastnameRef} id="name" type="text" />
      </div>
      <div>
        <label htmlFor="phone">Telephone</label>
        <input ref={phoneRef} id="phone" type="number" />
      </div>
      <div>
        <label htmlFor="mail">Email</label>
        <input ref={emailRef} id="mail" type="email" />
      </div>
      <div>
        <label htmlFor="password">Mot de passe</label>
        <input
          value={password}
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirm">Comfirmer mot de passe</label>
        <input
          value={confirmPassword}
          id="passwordConfirm"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button type="submit">Creer un compte</button>
    </form>
  );
}
