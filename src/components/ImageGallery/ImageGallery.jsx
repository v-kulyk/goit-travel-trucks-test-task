import Image from "../Image/Image";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <Image key={image.thumb} image={image} />
      ))}
    </div>
  );
}
