import { useSelector } from "react-redux";
import { selectHasMoreItems, selectItems } from "../../redux/catalogSlice";
import CatalogItem from "../CatalogItem/CatalogItem";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import styles from "./CatalogItemsList.module.css";

export default function CatalogItemsList() {
  const data = useSelector(selectItems);
  const hasMoreItems = useSelector(selectHasMoreItems);

  const list = data?.map((item) => (
    <li key={item.id}>
      <CatalogItem item={item} />
    </li>
  ));
  return (
    <div className={styles.listContainer}>
      {!list.length && (
        <p className={styles.noItems}>
          No items found by requested criteria, try removing some filters or
          change the location
        </p>
      )}
      {list.length > 0 && <ul className={styles.list}>{list}</ul>}
      {hasMoreItems && <LoadMoreButton />}
    </div>
  );
}
