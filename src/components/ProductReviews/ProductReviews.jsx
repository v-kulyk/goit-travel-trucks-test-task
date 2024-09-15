import Rating from "../Rating/Rating";
import styles from "./ProductReviews.module.css";
export default function ProductReviews({ product }) {
  const reviews = product.reviews.map((review) => (
    <li key={review.reviewer_name}>
      <header className={styles.header}>
        <div className={styles.logo}>{review.reviewer_name[0]}</div>
        <div>
          <p className={styles.name}>{review.reviewer_name}</p>
          <Rating value={review.reviewer_rating} />
        </div>
      </header>
      <p className={styles.comment}>{review.comment}</p>
    </li>
  ));
  return <ul className={styles.reviews}>{reviews}</ul>;
}
