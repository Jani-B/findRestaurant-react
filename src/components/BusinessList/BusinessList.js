import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

export default function BusinessList() {
  return (
    <div className={styles.businessListContainer}>
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
    </div>
  );
}
