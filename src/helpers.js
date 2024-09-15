export function fixLocationOrdering(location) {
  const splitted = location.split(",").map((item) => item.trim());
  return `${splitted[1]}, ${splitted[0]}`;
}

export function formatPrice(price) {
  return "€" + price.toFixed(2);
}
