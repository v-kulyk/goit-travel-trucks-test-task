import styles from "./Home.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1 className={styles.heading}>Campers of your dreams</h1>
          <p className={styles.subheading}>
            You can find everything you want in our catalog
          </p>
          <a href="/catalog" className="button">
            View Now
          </a>
        </div>
      </div>
    </>
  );
}
