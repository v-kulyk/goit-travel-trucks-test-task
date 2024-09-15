import { fixLocationOrdering } from "../../helpers";
import styles from "./ProductSubHeading.module.css";
export default function ProductSubHeading({ product }) {
  return (
    <p className={styles.subheading}>
      <span>
        <svg width={16} height={16}>
          <use xlinkHref="/sprite.svg#rating-yellow"></use>
        </svg>
        {product.rating} ({product.reviews.length} Reviews)
      </span>
      <span>
        <svg width={20} height={20}>
          <use xlinkHref="/sprite.svg#map"></use>
        </svg>
        {fixLocationOrdering(product.location)}
      </span>
    </p>
  );
}
