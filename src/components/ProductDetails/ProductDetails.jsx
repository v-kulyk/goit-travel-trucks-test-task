import Features from "../Features/Features";
import styles from "./ProductDetails.module.css";

export default function ProductDetails({ product }) {
  const specsList = [
    "form",
    "length",
    "width",
    "height",
    "tank",
    "consumption",
  ];

  const specs = specsList.map((specName) => {
    return (
      <li key={specName} className={styles.spec}>
        <span>{specName.charAt(0).toUpperCase() + specName.slice(1)}</span>{" "}
        <span>
          {product[specName].charAt(0).toUpperCase() +
            product[specName].slice(1)}
        </span>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <Features item={product} />
      {specs && (
        <div>
          <h2 className={styles.heading}>Vehicle details</h2>
          <ul className={styles.specsList}>{specs}</ul>
        </div>
      )}
    </div>
  );
}
