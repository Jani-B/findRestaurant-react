import styles from "./Business.module.css";

export default function Business(props) {
  return (
    <div className={styles.businessContainer}>
      <img className={styles.businessImage} src={props.businessdata.image}></img>
      <h2>{props.businessdata.name}</h2>
      <p>{props.businessdata.address1}</p>
      <p>{props.businessdata.city}</p>
      <p>State</p>
      <p>{props.businessdata.postal_code}</p>
      <p>{props.businessdata.food_type}</p>
      <p>{props.businessdata.rating} Stars</p>
      <p>{props.businessdata.reviews} reviews</p>
    </div>
  );
}
