// Helpers or utils

function esPar(numero) {
  return numero % 2 === 0;
}

function calcMedian(data) {
  let median;
  const middle = parseInt(data.length / 2);
  if (esPar(data.length)) {
    const firstElement = data[middle - 1];
    const secondElement = data[middle];

    median = calcArithmeticMean([firstElement, secondElement]);
  } else {
    median = data[middle];
  }

  return median;
}

function calcArithmeticMean(data) {
  const sumOfData = data.reduce((prev = 0, curr) => prev + curr);

  const arithmeticMean = sumOfData / data.length;

  return arithmeticMean;
}

// Calculadora de mediana

// General median
const salariosCol = colombia.map((persona) => persona.salary);

const salariosColSorted = salariosCol.sort((prev, curr) => prev - curr);

const colombianGeneralMedian = calcMedian(salariosColSorted);

// Top 10% median
const sliceStart = (salariosColSorted.length * 90) / 100;
const sliceCount = salariosColSorted.length - sliceStart;

const colombianTop10Salaries = salariosColSorted.splice(sliceStart, sliceCount);
const colombianTop10Median = calcMedian(colombianTop10Salaries);

console.log(
  `Mediana salarial general: ${colombianGeneralMedian}`,
  `\n`,
  `Colombian top 10% median: ${colombianTop10Median}`
);
