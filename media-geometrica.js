function calcGeometricMean(data) {
  const theresNeg = data.some((value) => value < 0);
  if (theresNeg) {
    console.error("Existen valores negativos en los datos.");
    return undefined;
  }

  const product = data.reduce((prev = 0, curr) => {
    return prev * curr;
  });

  const geometricMedian = Math.pow(product, 1 / data.length);

  return geometricMedian;
}
