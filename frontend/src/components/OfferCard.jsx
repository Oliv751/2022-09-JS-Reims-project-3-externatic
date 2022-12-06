import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import SampleCard from "./sampleCard";
import "./offercard-style.scss";

export default function OfferCard({ offer }) {
  return (
    <CardGroup>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{offer.companyName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {offer.offerName}
          </Card.Subtitle>
          <Card.Text>{offer.contract}</Card.Text>
          <Card.Text>{offer.location}</Card.Text>
          <Button variant="secondary">Apply</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

OfferCard.defaultProps = {
  offer: [],
};

OfferCard.propTypes = {
  offer: SampleCard,
};
