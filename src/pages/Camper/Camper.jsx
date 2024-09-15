import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectCurrentTab,
  selectData,
  selectError,
  selectLoading,
} from "../../redux/productSlice";
import { fetchOneCamper } from "../../redux/camperOps";
import Container from "../../components/Container/Container";
import { formatPrice } from "../../helpers";
import ProductSubHeading from "../../components/ProductSubHeading/ProductSubHeading";
import styles from "./Camper.module.css";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import TabSwitcher from "../../components/TabSwitcher/TabSwitcher";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductReviews from "../../components/ProductReviews/ProductReviews";
import BookingForm from "../../components/BookingForm/BookingForm";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

export default function Camper() {
  const { camperId } = useParams();

  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  const error = useSelector(selectError);

  const product = useSelector(selectData);

  const currentTab = useSelector(selectCurrentTab);

  useEffect(() => {
    document.title = product
      ? product.name + " | Travel Trucks"
      : "Travel Trucks";
  }, [product]);
  useEffect(() => {
    dispatch(fetchOneCamper(camperId));
  }, [dispatch]);

  if (isLoading) {
    return (
      <Container>
        <article className={styles.container}>
          <LoadingScreen />
        </article>
      </Container>
    );
  }

  if (error) {
    return <>Error: {error}</>;
  }

  if (!product) {
    return <>Camper not found</>;
  }

  return (
    <Container>
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>{product.name}</h1>
          <ProductSubHeading product={product} />
          <p className={styles.price}>{formatPrice(product.price)}</p>
        </header>
        <div className={styles.galleryContainer}>
          <ImageGallery images={product.gallery} />
        </div>
        <p className={styles.description}>{product.description}</p>
        <TabSwitcher />
        <div className={styles.columns}>
          {currentTab === "Features" && <ProductDetails product={product} />}
          {currentTab === "Reviews" && <ProductReviews product={product} />}
          <BookingForm />
        </div>
      </article>
    </Container>
  );
}
