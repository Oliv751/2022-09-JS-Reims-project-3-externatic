import Header from "../components/Header";
import "../styles/editOffer.scss";

export default function EditOffer() {
  return (
    <div className="pageEditOffer">
      <Header />
      <form className="editOffer">
        <div className="describe">
          <label htmlFor="tite">Titre de l'offre</label>
          <input type="text" />
        </div>
        <div className="describe">
          <label htmlFor="describe">Description</label>
          <textarea name="describe" id="describe" cols="30" rows="10" />
        </div>
        <div className="contract">
          <label htmlFor="contract">Type de contrat</label>
          <select name="contract" id="contract">
            <option value=""> </option>
            <option value="cdi">CDI</option>
            <option value="cdd">CDD</option>
            <option value="stage">STAGE</option>
          </select>
        </div>
        <div className="premises">
          <label htmlFor="premises">Lieux</label>
          <input type="text" />
        </div>
        <button type="button">Enregister</button>
      </form>
    </div>
  );
}
