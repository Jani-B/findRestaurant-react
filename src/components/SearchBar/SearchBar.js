import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ searchFromYelp }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortOption, setSortOption] = useState("best_match");

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
    searchFromYelp(searchTerm, location, sortOption);
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
              className={checkClass("best_match")}
              id="best_match"
            >
              Best Match
            </button>
          </li>
          <li>
            <button
              onClick={sortButtonEvent}
              className={checkClass("rating")}
              id="rating"
            >
              Highest Rated
            </button>
          </li>
          <li>
            <button
              onClick={sortButtonEvent}
              className={checkClass("review_count")}
              id="review_count"
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
