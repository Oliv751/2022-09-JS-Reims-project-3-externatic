function errorMessage(error) {
  const email = error.sqlMessage.search("email");
  const colum = error.sqlMessage.search("column 'NaN");

  let msg = "";
  if (email >= 0) {
    msg = "Un compte avec l'adresse email existe déjà";
  }

  if (colum >= 0) {
    msg = "Veuillez renseigner tous les champs";
  }

  return msg;
}

module.exports = errorMessage;
