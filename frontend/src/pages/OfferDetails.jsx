import Header from "../components/Header";
import "./OfferDetails.css";

function OfferDetails() {
  return (
    <>
      <Header />
      <article className="Offer-Details">
        <h2 className="Job-Name">Job Name</h2>
        <h3 className="Entreprise-Name">Entreprise Name</h3>
        <p className="Publication-Date">Publication Date</p>
        <section className="Entreprise-Description">
          <h4>Entreprise Description</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a
            diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as
            quam viverra nec consectetur ant hendrerit. Donec et mollis dolor.
            Praesent et diam eget libero egestas mattis sit amet vitae augue.
            Nam tincidunt congue enim, ut porta lorem lacinia consectetur.
          </p>
        </section>
        <section className="Job-Description">
          <h4>Job Requirements</h4>
          <h5 className="Job-Type">Job Type</h5>
          <h6 className="Location">Location</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a
            diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as
            quam viverra nec consectetur ant hendrerit. Donec et mollis dolor.
            Praesent et diam eget libero egestas mattis sit amet vitae augue.
            Nam tincidunt congue enim, ut porta lorem lacinia consectetur.
          </p>
        </section>
      </article>
    </>
  );
}

export default OfferDetails;
