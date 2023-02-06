import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import OfferCard from "./OfferCard";
import SampleCard from "./sampleCard";
import logoFilter from "../assets/filter-results-button.png";
import logoDelete from "../assets/x.png";

export default function OfferList({ offerList }) {
  const [visible, setVisible] = useState(false);
  const [offerFilter, setOfferFilter] = useState([]);
  const [listFilter, setListFilter] = useState({
    ville: null,
    contract: null,
    title: null,
  });

  const filtre = () => {
    const newArray = offerList
      .filter((offer) =>
        listFilter.ville
          ? offer.location
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .match(
                `^${listFilter.ville
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")}.*?`,
                "gmi"
              )
          : true
      )
      .filter((offer) =>
        listFilter.contract
          ? offer.contract
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") ===
            listFilter.contract
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          : true
      )
      .filter((offer) =>
        listFilter.title
          ? offer.offer_name
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .match(
                `^${listFilter.title
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")}.*?`,
                "gmi"
              )
          : true
      );

    setOfferFilter(newArray);
  };

  useEffect(() => {
    setOfferFilter(offerList);
  }, [offerList]);

  useEffect(() => {
    filtre();
  }, [listFilter]);

  return (
    <section className="listOffer">
      <button
        className="buttonFilter"
        type="button"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <img src={logoFilter} alt="" />
      </button>
      <div className={visible ? "filter" : "hidden"}>
        <div>
          <label htmlFor=" ">Recherche par titre</label>
          <input
            type="text"
            value={listFilter.title}
            onChange={(e) => {
              if (e.target.value) {
                setListFilter({
                  ...listFilter,
                  title: e.target.value.toLowerCase(),
                });
              } else {
                setListFilter({ ...listFilter, title: null });
              }
            }}
          />
          <button
            type="button"
            className="crossButton"
            onClick={() => setListFilter({ ...listFilter, title: "" })}
          >
            <img src={logoDelete} alt="" />
          </button>
        </div>
        <div>
          <label htmlFor=" ">Recherche par ville</label>
          <input
            type="text"
            value={listFilter.ville}
            onChange={(e) => {
              if (e.target.value) {
                setListFilter({
                  ...listFilter,
                  ville: e.target.value.toLowerCase(),
                });
              } else {
                setListFilter({ ...listFilter, ville: null });
              }
            }}
          />

          <button
            type="button"
            className="crossButton"
            onClick={() => setListFilter({ ...listFilter, ville: "" })}
          >
            <img src={logoDelete} alt="" />
          </button>
        </div>
        <select
          onChange={(e) => {
            if (e.target.value) {
              setListFilter({ ...listFilter, contract: e.target.value });
            } else {
              setListFilter({ ...listFilter, contract: null });
            }
          }}
        >
          <option value="">Type de contrat</option>
          <option value="cdd">CDD</option>
          <option value="cdi">CDI</option>
          <option value="stage">STAGE</option>
          <option value="alternance">ALTERNANCE</option>
        </select>
      </div>
      <ul className="OfferList">
        {offerFilter.map((offer) => (
          <li key={offer.id}>
            <Link to={`/offers/${offer.id}`}>
              <OfferCard offer={offer} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

OfferList.defaultProps = {
  offerList: [],
};

OfferList.propTypes = {
  offerList: PropTypes.arrayOf(SampleCard),
};
