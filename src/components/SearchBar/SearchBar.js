import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState();
  const [location, setLocation] = useState("Search Location");
  const [sortOption, setSortOption] = useState("Best Match");

  const sortButtonEvent = (event) => {
    setSortOption(event.target.id);
  };

  const checkClass = (id) => {
    if (id === sortOption) {
      return styles.activeButton;
    }
    return styles.sortButton;
  };

  const searchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const locationInput = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(
      `Searching for ${searchTerm} ${location} with sortOption: ${sortOption}`
    );
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.sortDiv}>
        <ul className={styles.sortContainer}>
          <li>
            <button
              onClick={sortButtonEvent}
              className={checkClass("Best Match")}
              id="Best Match"
            >
              Best Match
            </button>
          </li>
          <li>
            <button
              onClick={sortButtonEvent}
              className={checkClass("Highest Rated")}
              id="Highest Rated"
            >
              Highest Rated
            </button>
          </li>
          <li>
            <button
              onClick={sortButtonEvent}
              className={checkClass("Most Reviewed")}
              id="Most Reviewed"
            >
              Most Reviewed
            </button>
          </li>
        </ul>
      </div>
      <form onSubmit={handleSearch}>
        <div className={styles.inputContainer}>
          <input
            className={styles.searchInput}
            placeholder="Search Restaurants"
            onChange={searchInput}
          ></input>
          <input
            placeholder="Search Location"
            className={styles.searchInput}
            onChange={locationInput}
          ></input>
        </div>
        <button type="submit" className={styles.searchButton}>
          Lets Go!
        </button>
      </form>
    </div>
  );
}
