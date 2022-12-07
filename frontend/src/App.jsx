import Container from "react-bootstrap/Container";
import OfferList from "./components/OfferList";
import Header from "./components/Header";
import "./App.css";

function App() {
  const firstOffer = {
    id: 1,
    companyName: "Company 1",
    offerName: "Développeur React",
    location: "Paris",
    contract: "CDI",
    publicationDate: "2021-01-01",
  };
  const secondOffer = {
    id: 2,
    companyName: "Company 2",
    offerName: "Développeur Fullstack",
    location: "Paris",
    contract: "CDI",
    publicationDate: "2021-01-01",
  };
  const offerList = [firstOffer, secondOffer];
  return (
    <div className="App">
      <Container>
        <Header />
        <OfferList offerList={offerList} />
      </Container>
    </div>
  );
}

export default App;
