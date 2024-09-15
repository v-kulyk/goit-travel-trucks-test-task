import {
  AutomaticTransmission,
  AC,
  Bathroom,
  Kitchen,
  TV,
  Radio,
  EngineType,
} from "../Badges/Badges";
import styles from "./Features.module.css";

const featuresList = {
  "transmission:automatic": AutomaticTransmission,
  "engine:*": EngineType,
  kitchen: Kitchen,
  AC: AC,
  bathroom: Bathroom,
  TV: TV,
  radio: Radio,
};

export default function Features({ item }) {
  const itemFeatures = Object.keys(featuresList)
    .filter((key) => {
      const propName = key.split(":")[0];
      return item[propName];
    })
    .map((key) => {
      const propName = key.split(":")[0];
      const value = key.split(":")[1] ?? true;

      if (value === "*" && item[propName]) {
        return (
          <li key={item.id + ":" + key}>
            {featuresList[key]({
              title: item[propName][0].toUpperCase() + item[propName].slice(1),
            })}
          </li>
        );
      }

      if (value === item[propName]) {
        return (
          <li key={item.id + ":" + key}>
            {featuresList[key]({ title: undefined })}
          </li>
        );
      }
    });

  return itemFeatures.length ? (
    <ul className={styles.features}>{itemFeatures}</ul>
  ) : (
    <></>
  );
}
