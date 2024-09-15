import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentTab,
  selectTabs,
  setCurrentTab,
} from "../../redux/productSlice";
import styles from "./TabSwitcher.module.css";
import clsx from "clsx";

export default function TabSwitcher() {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectCurrentTab);
  const tabs = useSelector(selectTabs).map((tab) => (
    <li
      key={tab}
      className={clsx({
        [styles.tab]: true,
        [styles.active]: activeTab === tab,
      })}
    >
      <button data-tab={tab}>{tab}</button>
    </li>
  ));

  const handleClick = (event) => {
    dispatch(setCurrentTab(event.target.dataset.tab));
  };

  return (
    <ul className={styles.tabs} onClick={handleClick}>
      {tabs}
    </ul>
  );
}
