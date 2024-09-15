export default function Rating({ value }) {
  const stars = [0, 0, 0, 0, 0].fill(1, 0, value - 1).map((item, index) => {
    if (item) {
      return (
        <svg key={index} width={16} height={16}>
          <use xlinkHref="/sprite.svg#rating-yellow"></use>
        </svg>
      );
    }

    return (
      <svg key={index} width={16} height={16}>
        <use xlinkHref="/sprite.svg#rating-grey"></use>
      </svg>
    );
  });

  return <div>{stars}</div>;
}
