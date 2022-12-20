function errorMessage(erreur) {
  const email = erreur.search("email");
  const colum = erreur.search("column 'NaN");

  if (email >= 0) {
    return "Un compte avec l'adresse email existe déjà";
  }

  if (colum >= 0) {
    return "Veuillez renseigner tous les champs";
  }
}

export default errorMessage;
