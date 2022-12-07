import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardGroup } from "react-bootstrap";
import SampleCard from "./sampleCard";
import "./offercard-style.scss";

export default function OfferCard({ offer }) {
  return (
    <Link to={`/offers/${offer.id}`}>
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Header>
            <Card.Title>{offer.companyName}</Card.Title>
            <Card.Subtitle className="mb-1 text-muted">
              {offer.offerName} / {offer.publicationDate}
            </Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Card.Text>{offer.contract}</Card.Text>
            <Card.Text>{offer.location}</Card.Text>
            <Button variant="secondary">Apply</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </Link>
  );
}

OfferCard.defaultProps = {
  offer: [],
};

OfferCard.propTypes = {
  offer: SampleCard,
};
