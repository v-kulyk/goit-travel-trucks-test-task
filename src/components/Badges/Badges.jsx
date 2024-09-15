import styles from "./Badges.module.css";

const Badge = ({ title, children }) => {
  return (
    <span className={styles.badge}>
      {children}
      {title}
    </span>
  );
};

export default Badge;

export const AutomaticTransmission = ({ title }) => {
  return (
    <Badge title={title || "Automatic"}>
      <svg width={20} height={20} viewBox="0 0 32 32">
        <use xlinkHref="/sprite.svg#diagram"></use>
      </svg>
    </Badge>
  );
};

export const AC = ({ title }) => {
  return (
    <Badge title={title || "AC"}>
      <svg width={20} height={20} viewBox="0 0 32 32">
        <use xlinkHref="/sprite.svg#wind"></use>
      </svg>
    </Badge>
  );
};
export const Bathroom = ({ title }) => {
  return (
    <Badge title={title || "Bathroom"}>
      <svg width={20} height={20} viewBox="0 0 32 32">
        <use xlinkHref="/sprite.svg#droplet"></use>
      </svg>
    </Badge>
  );
};
export const Kitchen = ({ title }) => {
  return (
    <Badge title={title || "Kitchen"}>
      <svg width={20} height={20} viewBox="0 0 32 32">
        <use xlinkHref="/sprite.svg#cup-hot"></use>
      </svg>
    </Badge>
  );
};

export const TV = ({ title }) => {
  return (
    <Badge title={title || "TV"}>
      <svg width={20} height={20} viewBox="0 0 32 32">
        <use xlinkHref="/sprite.svg#tv"></use>
      </svg>
    </Badge>
  );
};

export const Radio = ({ title }) => {
  return (
    <Badge title={title || "Radio"}>
      <svg width={20} height={20} viewBox="0 0 20 20">
        <use xlinkHref="/sprite.svg#radio"></use>
      </svg>
    </Badge>
  );
};

export const EngineType = ({ title }) => {
  return (
    <Badge title={title}>
      <svg width={20} height={20} viewBox="0 0 20 20">
        <use xlinkHref="/sprite.svg#fuel-pump"></use>
      </svg>
    </Badge>
  );
};
