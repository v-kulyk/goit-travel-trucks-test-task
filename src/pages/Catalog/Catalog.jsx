import { useDispatch, useSelector } from "react-redux";
import {
  selectLoading,
  selectError,
  selectFilter,
  selectPage,
  setFilter,
  resetPage,
} from "../../redux/catalogSlice";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/camperOps";
import CatalogItemsList from "../../components/CatalogItemsList/CatalogItemsList";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import styles from "./Catalog.module.css";
import Container from "../../components/Container/Container";
import { useSearchParams } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

export default function Catalog() {
  const [searchParams, _] = useSearchParams();

  const page = useSelector(selectPage);

  const filter = useSelector(selectFilter);

  const isLoading = useSelector(selectLoading);

  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Campers Catalog | Travel Trucks";
  }, []);

  useEffect(() => {
    const dataFromUrl = {};

    searchParams.keys().forEach((key) => {
      dataFromUrl[key] = searchParams.get(key);
    });

    dispatch(setFilter(dataFromUrl));
    dispatch(resetPage());
  }, [searchParams]);

  useEffect(() => {
    if (!filter) return;
    dispatch(fetchCampers({ page, filter }));
  }, [dispatch, page, filter]);

  return (
    <Container>
      <div className={styles.container}>
        {isLoading && <LoadingScreen />}
        <CatalogFilter />
        {!isLoading && <CatalogItemsList />}
      </div>
    </Container>
  );
}
