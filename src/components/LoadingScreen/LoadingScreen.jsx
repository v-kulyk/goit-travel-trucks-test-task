import styles from "./LoadingScreen.module.css";
import { Oval } from "react-loader-spinner";
export default function LoadingScreen() {
  return (
    <div className={styles.loading}>
      <Oval color="#e44848" secondaryColor="#6c717b" height={160} width={160} />
    </div>
  );
}
