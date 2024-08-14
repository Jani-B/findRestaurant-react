import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import BusinessList from "./components/BusinessList/BusinessList";

const apiMockData = [
  {
    name: "1st Business",
    address1: "location street 1010",
    address2: "Specific loc",
    city: "LA",
    postal_code: "00262",
    food_type: "Italian",
    rating: "4.5",
    reviews: "1005",
    image: "./restaurantmock.jpg",
  },
  {
    name: "2st Business",
    address1: "street 3534",
    address2: "Morer",
    city: "NY",
    postal_code: "00424",
    food_type: "Greek",
    rating: "4.5",
    reviews: "1005",
    image: "./restaurantmock.jpg",
  },
  {
    name: "3st Business",
    address1: "street 3534",
    address2: "Morer",
    city: "Mexico",
    postal_code: "00424",
    food_type: "Australian",
    rating: "4.5",
    reviews: "1005",
    image: "./restaurantmock.jpg",
  },
  {
    name: "4st Business",
    address1: "street 3534",
    address2: "Morer",
    city: "Hamb",
    postal_code: "00424",
    food_type: "Finnish",
    rating: "4.5",
    reviews: "1005",
    image: "./restaurantmock.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ravenous</h1>
      </header>
      <main>
        <SearchBar />
        <BusinessList businessDetails={apiMockData} />
      </main>
    </div>
  );
}

export default App;
