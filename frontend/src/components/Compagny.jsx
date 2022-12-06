export default function Compagny() {
  return (
    <form>
      <p>Join Externatic as entreprise</p>
      <div>
        <label htmlFor="name">Nom</label>
        <input id="name" type="text" /> <br />
        <label htmlFor="phone">Telephone</label>
        <input id="phone" type="number" /> <br />
        <label htmlFor="mail">Email</label>
        <input id="mail" type="email" /> <br />
        <label htmlFor="siret">N sriret</label>
        <input id="siret" type="number" /> <br />
        <label htmlFor="password">Mot de passe</label>
        <input id="password" type="password" /> <br />
        <label htmlFor="passwordConfirm">Comfirmer mot de passe</label>
        <input id="passwordConfirm" type="password" /> <br />
      </div>

      <button type="button">Creer un compte</button>
    </form>
  );
}
