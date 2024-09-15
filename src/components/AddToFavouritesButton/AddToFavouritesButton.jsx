import { useDispatch, useSelector } from "react-redux";
import styles from "./AddToFavouritesButton.module.css";
import {
  addToFavourites,
  removeFromFavourites,
  selectIsInFavourites,
} from "../../redux/favouritesSlice";
export default function AddToFavouritesButton({ itemId }) {
  // return null;
  const distpatch = useDispatch();

  const isInFavourites = useSelector((state) =>
    selectIsInFavourites(state, itemId)
  );

  const handleClick = () => {
    if (isInFavourites) distpatch(removeFromFavourites(itemId));
    else distpatch(addToFavourites(itemId));
  };

  return (
    <button onClick={handleClick} className={styles.addToFavourites}>
      <svg width={24} height={23}>
        {isInFavourites && <use xlinkHref="/sprite.svg#heart-pressed"></use>}
        {!isInFavourites && <use xlinkHref="/sprite.svg#heart"></use>}
      </svg>
    </button>
  );
}
