import OfferList from "./components/OfferList";
import Header from "./components/Header";
import OfferDetails from "./pages/OfferDetails";
import "./App.css";

function App() {
  const firstOffer = {
    id: 1,
    companyName: "Company 1",
    offerName: "Offer 1",
    location: "Paris",
    contract: "CDI",
    publicationDate: "2021-01-01",
  };
  const secondOffer = {
    id: 2,
    companyName: "Company 2",
    offerName: "Offer 2",
    location: "Paris",
    contract: "CDI",
    publicationDate: "2021-01-01",
  };
  const offerList = [firstOffer, secondOffer];
  return (
    <div className="App">
      <OfferList offerList={offerList} />
      <Header />
      <OfferDetails />
    </div>
  );
}

export default App;
