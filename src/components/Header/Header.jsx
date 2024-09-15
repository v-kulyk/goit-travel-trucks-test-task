import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

export default function Header({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <Link to="/" className={styles.logo}>
            <svg width={136} height={16}>
              <use xlinkHref="/sprite.svg#logo"></use>
            </svg>
          </Link>
          {children}
        </Container>
      </header>
    </>
  );
}
