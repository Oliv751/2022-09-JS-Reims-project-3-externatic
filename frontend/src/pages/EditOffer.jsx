export default function EditOffer() {
  return (
    <form className="editOffer">
      <div className="describe">
        <label htmlFor="tite">Titre de l'offre</label>
        <input type="text" />
      </div>
      <div className="describe">
        <label htmlFor="describe">Description</label>
        <textarea name="describe" id="describe" cols="30" rows="10" />
      </div>
      <div>
        <label htmlFor="contract">Type de contrat</label>
        <select name="contract" id="contract">
          <option value=""> </option>
          <option value="cdi">CDI</option>
          <option value="cdd">CDD</option>
          <option value="stage">STAGE</option>;
        </select>
      </div>
      <div>
        <label htmlFor="premises">Lieux</label>
        <input type="text" />
      </div>
      <button type="button">Enregister</button>
    </form>
  );
}
