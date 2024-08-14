import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import BusinessList from "./components/BusinessList/BusinessList";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <SearchBar />
        <BusinessList />
      </main>
    </div>
  );
}

export default App;
