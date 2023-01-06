import { React, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import externaticLogo from "../assets/logos/externaticLogo.png";
import "../styles/consultantArea.scss";

export default function ConsultantArea() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const descriptionRef = useRef();
  // const [data, setData] = useState(null);

  useEffect(() => {
    fetch("").then((response) => response.json());
  }, []);

  return (
    <form className="area">
      <header>
        <nav>
          <Link to="/">
            <img
              className="externaticLogo"
              src={externaticLogo}
              alt="externaticLogo"
            />
          </Link>
          <Link to="/connexion">
            <button type="button" className="button-connexion">
              <MdAccountCircle className="personIcon" />
            </button>
          </Link>
        </nav>
      </header>
      <section className="describeConsultant">
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
          <label htmlFor="Description">Description</label>
          <textarea ref={descriptionRef} id="description" />
        </div>
        <div className="btnSave">
          <button type="submit">Enregistrer</button>
        </div>
      </section>

      <section className="offres">
        <h2>Mes offres</h2>
        <div className="btnOffre">
          <button type="submit">Ajouter une offre</button>
        </div>
      </section>
    </form>
  );
}
