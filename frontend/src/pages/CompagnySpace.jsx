import "../styles/compagnySpace.scss";
import crayon from "../assets/crayon.png";
import supprimer from "../assets/bouton-supprimer.png";

export default function CompagnySpace() {
  return (
    <form className="space">
      <section className="describeCompagny">
        <div>
          <label htmlFor="name">Nom</label>
          <input id="name" type="text" value="wild code" />
        </div>
        <div>
          <label htmlFor="phone">Telephone</label>
          <input id="phone" type="number" value="0606060606" />
        </div>
        <div>
          <label htmlFor="mail">Email</label>
          <input id="mail" type="email" value="wild@wild.fr" />
        </div>
        <div>
          <label htmlFor="address">Adresse</label>
          <input id="address" type="text" value="10 rue de reims , REIMS" />
        </div>
      </section>

      <section className="offers">
        <div>
          <h2>Mes offres</h2>
          <button type="button">Ajouter une offre</button>
        </div>
        <div>
          <h3>Developpeur web full stack</h3>
          <p>Ref : 054724</p>
          <button type="button">
            <img src={crayon} alt="boutton editer" />
          </button>
          <button type="button">
            <img src={supprimer} alt="boutton supprimer" />
          </button>
        </div>
        <div>
          <h3>Developpeur web full stack</h3>
          <p>Ref : 054724</p>
          <button type="button">
            <img src={crayon} alt="boutton editer" />
          </button>
          <button type="button">
            <img src={supprimer} alt="boutton supprimer" />
          </button>
        </div>
      </section>

      <button type="button">Enregistrer</button>
    </form>
  );
}
