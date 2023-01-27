import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa";
import SampleCard from "./sampleCard";
import "../styles/offercard-style.scss";

export default function OfferCard({ offer }) {
  const date = new Date(offer.publication_date);

  return (
    <section className="cardsOffer">
      <header>
        <h2>{offer.offer_name}</h2>

        <time className="published">{date.toLocaleDateString("fr-FR")}</time>
      </header>
      <p className="description">
        {offer.offer_description.split(" ").slice(0, 20).join(" ")}...
      </p>
      <footer>
        <MdLocationOn className="icon_description" />
        <p>{offer.location}</p>
        <FaFileSignature className="icon_description" />
        <p>{offer.contract}</p>
      </footer>
    </section>
  );
}

OfferCard.defaultProps = {
  offer: [],
};

OfferCard.propTypes = {
  offer: SampleCard,
};
