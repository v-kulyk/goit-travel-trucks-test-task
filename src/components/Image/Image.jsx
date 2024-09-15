import styles from "./Image.module.css";
export default function Image({ image }) {
  return (
    <div className={styles.image}>
      <img src={image.thumb} />
    </div>
  );
}
