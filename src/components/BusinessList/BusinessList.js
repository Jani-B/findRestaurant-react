import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

export default function BusinessList(props) {
  return (
    <div className={styles.businessListContainer}>
      {props.businessDetails.map((business) => (
        <Business key={business.name} businessdata={business} />
      ))}
    </div>
  );
}
