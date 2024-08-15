import styles from "./Business.module.css";

//    <p>{business.address}</p>
//<p>{business.city}</p>
//<p>State</p>
//<p>{business.postal_code}</p>
//<p>{business.food_type}</p>
//<p>{business.rating} Stars</p>
//<p>{business.reviews} reviews</p>
//

export default function Business({ business }) {
  return (
    <div className={styles.businessContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.businessImage}
          src={business.imageSrc}
          alt="restaurant"
        ></img>
      </div>
      <div className={styles.informationContainer}>
        <div className={styles.textContainer}>
          <h2>{business.name}</h2>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.postal_code}`}</p>
        </div>
        <div className={styles.reviewsContainer}>
          <p className={styles.category}>{business.category}</p>
          <p>{`${business.rating} stars `}</p>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
}
