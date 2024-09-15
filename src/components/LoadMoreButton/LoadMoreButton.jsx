import { useDispatch } from "react-redux";
import { setIncrementPage } from "../../redux/catalogSlice";
import styles from "./LoadMoreButton.module.css";

export default function LoadMoreButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setIncrementPage());
  };
  return (
    <button onClick={handleClick} className={styles.button} type="button">
      Load more
    </button>
  );
}
