import React from "react";
import Card from "react-bootstrap/Card";
import SampleCard from "./sampleCard";

export default function OfferCard({ offer }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{offer.companyName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {offer.offerName}
        </Card.Subtitle>
        <Card.Text>
          {offer.location}
          <br />
          {offer.contract}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

OfferCard.defaultProps = {
  offer: [],
};

OfferCard.propTypes = {
  offer: SampleCard,
};
