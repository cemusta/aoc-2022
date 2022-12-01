export const countElfCalories = (input: string): number[] => {
  const elfCalories = input.split('\n\n').map((arr) =>
    arr
      .split('\n')
      .map(Number)
      .reduce((a, b) => a + b, 0),
  );

  return elfCalories.sort((a, b) => b - a);
};
