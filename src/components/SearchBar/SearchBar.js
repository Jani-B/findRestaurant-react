import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

export default function SearchBar() {
  const bestMatch = () => {};

  return (
    <div className={styles.searchBarContainer}>
      <ul className={styles.sortContainer}>
        <li>
          <button className={styles.sortButton}>Best Match</button>
        </li>
        <li>
          <button className={styles.sortButton}>Highest Rated</button>
        </li>
        <li>
          <button className={styles.sortButton}>Most Reviewed</button>
        </li>
      </ul>
      <input className={styles.searchInput}></input>
      <input className={styles.searchInput}></input>
      <button className={styles.searchButton}>Lets Go!</button>
    </div>
  );
}
