import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import BusinessList from "./components/BusinessList/BusinessList";
import YelpGet from "./utils/Yelp";
import { useState } from "react";

const apiMockData = [
  {
    id: "1",
    name: "Mock Business",
    address1: "location street 1010",
    address2: "Specific loc",
    city: "LA",
    state: "something",
    postal_code: "00262",
    category: "Italian",
    rating: "4.5",
    reviewCount: "1005",
    imageSrc: "./restaurantmock.jpg",
  },
  {
    id: "2",
    name: "Restaurant for Burgers",
    address1: "street 3534",
    address2: "Morer",
    city: "NY",
    state: "something",
    postal_code: "00424",
    category: "Greek",
    rating: "4.5",
    reviewCount: "1005",
    imageSrc: "./restaurantmock.jpg",
  },
  {
    id: "3",
    name: "Meaty",
    address1: "street 3534",
    address2: "Morer",
    city: "Mexico",
    state: "something",
    postal_code: "00424",
    category: "Australian",
    rating: "4.5",
    reviewCount: "1005",
    imageSrc: "./restaurantmock.jpg",
  },
  {
    id: "4",
    name: "Last one for meat",
    address1: "street 3534",
    address2: "Morer",
    city: "Hamb",
    state: "something",
    postal_code: "00424",
    category: "Finnish",
    rating: "4.5",
    reviewCount: "1005",
    imageSrc: "./restaurantmock.jpg",
  },
];

function App() {
  const [business, setBusiness] = useState(apiMockData);

  const searchFromYelp = async (term, location, sortOption) => {
    const businesses = await YelpGet(term, location, sortOption);
    setBusiness(businesses);
  };
  console.log(business);

  //

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find Restaurant</h1>
      </header>
      <main>
        <SearchBar searchFromYelp={searchFromYelp} />
        <BusinessList businesses={business} />
      </main>
    </div>
  );
}

export default App;
