import React from "react";
import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

export default function BusinessList({ businesses }) {
  return (
    <div className={styles.businessListContainer}>
      {businesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
}
