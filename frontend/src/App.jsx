import OfferList from "./components/OfferList";
import Header from "./components/Header";

import "./App.css";

function App() {
  const firstOffer = {
    id: 1,
    name: "Développeur React",
    description: "Lorem ipsum",
  };
  const secondOffer = {
    id: 2,
    name: "Développeur Node",
    description: "Lorem ipsum",
  };
  const offerList = [firstOffer, secondOffer];
  return (
    <div className="App">
      {offerList.map((offer) => (
        <OfferList offer={offer} />
      ))}
      <Header />
    </div>
  );
}

export default App;
