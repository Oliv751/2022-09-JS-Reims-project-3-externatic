const mailer = require("./mailer");
const models = require("../models");

const sendEmail = (req, res) => {
  let offerName;
  let candidateInformation;
  let consultantInformation;

  const promise1 = models.offer.find(req.body.offerId).then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {
      offerName = rows[0].offer_name;
    }
  });

  const promise2 = models.user
    .findCandidateByUserId(req.body.userId)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        candidateInformation = { ...rows[0] };
        delete candidateInformation.password;
      }
    });

  const promise3 = models.user
    .findConsultantByUserId(req.body.consultantId)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        consultantInformation = { ...rows[0] };
        delete consultantInformation.password;
      }
    });

  Promise.all([promise1, promise2, promise3]).then(() => {
    const message = `
  <table>
  <tr>
  <td>Nom :</td>
  <td>${candidateInformation.lastname}</td>
  </tr>
  <tr>
  <td>Prenom :</td>
  <td>${candidateInformation.firstname}</td>
  </tr>
    <tr>
  <td>Email :</td>
  <td>${candidateInformation.email}</td>
  </tr>
      <tr>
  <td>Adresse :</td>
  <td>${candidateInformation.address}</td>
  </tr>
</table>

<p>
  À postuler a l'offre de ${offerName} , ref : ${req.body.offerId} .
</p>
  `;

    mailer.sendMail(
      {
        from: "externatic.wild@gmail.com",
        to: consultantInformation.email,
        subject: "Externatic",
        text: "Bonjour, ceci est un email envoyer avec nodemailer est sendinblue",
        html: message,
      },
      (err) => {
        if (err) {
          console.error(err);
        } else {
          res.sendStatus(200);
        }
      }
    );

    res.sendStatus(200);
  });
};

module.exports = { sendEmail };
