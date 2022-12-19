export default function NewCandidateForm() {
  return (
    <form>
      <div>
        <label htmlFor="name">Nom</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="phone">Telephone</label>
        <input id="phone" type="number" />
      </div>
      <div>
        <label htmlFor="mail">Email</label>
        <input id="mail" type="email" />
      </div>
      <div>
        <label htmlFor="password">Mot de passe</label>
        <input id="password" type="password" />
      </div>
      <div>
        <label htmlFor="passwordConfirm">Comfirmer mot de passe</label>
        <input id="passwordConfirm" type="password" />
      </div>

      <button type="submit">Creer un compte</button>
    </form>
  );
}
