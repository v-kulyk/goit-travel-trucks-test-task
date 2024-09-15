import { Link } from "react-router-dom";
import styles from "./CatalogItem.module.css";
import { fixLocationOrdering, formatPrice } from "../../helpers";
import AddToFavouritesButton from "../AddToFavouritesButton/AddToFavouritesButton";
import Features from "../Features/Features";

export default function CatalogItem({ item }) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <img src={item.gallery[0].thumb} alt={item.name} />
      </div>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.heading}>
            <h2>{item.name}</h2>
            <p className={styles.price}>
              {formatPrice(item.price)}
              <AddToFavouritesButton itemId={item.id} />
            </p>
          </div>
          <p className={styles.subheading}>
            <span>
              <svg width={16} height={16}>
                <use xlinkHref="/sprite.svg#rating-yellow"></use>
              </svg>
              {item.rating} ({item.reviews.length} Reviews)
            </span>
            <span>
              <svg width={20} height={20}>
                <use xlinkHref="/sprite.svg#map"></use>
              </svg>
              {fixLocationOrdering(item.location)}
            </span>
          </p>
        </header>
        <p className={styles.description}>{item.description}</p>
        <Features item={item} />
        <footer>
          <Link className="button" target="_blank" to={`/catalog/${item.id}`}>
            Show more
          </Link>
        </footer>
      </div>
    </article>
  );
}
