import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

export default function SearchBar() {
  const bestMatch = () => {};
  const [searchTerm, setSearchTerm] = useState("Search Restaurants");
  const [location, setLocation] = useState("Search Location");
  const [sortOption, setSortOption] = useState("Best Match");

  const sortButtonEvent = (event) => {
    setSortOption(event.target.id);

    console.log(sortOption);
  };

  const checkClass = (id) => {
    if (id === sortOption) {
      return styles.activeButton;
    }
    return styles.sortButton;
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
      <div className={styles.inputContainer}>
        <input className={styles.searchInput} value={searchTerm}></input>
        <input className={styles.searchInput} value={location}></input>
      </div>
      <button className={styles.searchButton}>Lets Go!</button>
    </div>
  );
}
