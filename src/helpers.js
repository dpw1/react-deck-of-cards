const randomNumber = (min, max, length = 1) => {
  const limit = max - min + 1;
  if (min > max || max < min) {
    throw new Error(
      `Parameter "min" has to be smaller than "max" and vice-versa.`
    );
  } else if (length > limit) {
    throw new Error(
      `The length between ${min} and ${max} cannot exceed ${limit}.`
    );
  }

  let uniqueNumbers = [];
  let number;
  for (var i = 0; i < length; i++) {
    do number = Math.floor(Math.random() * limit) + min;
    while (uniqueNumbers.indexOf(number) !== -1);

    uniqueNumbers[i] = number;
  }

  return uniqueNumbers;
};

export { randomNumber };
