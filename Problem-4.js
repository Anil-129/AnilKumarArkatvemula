

function countMultiples(arr) {
  const result = {};
  for (let i = 1; i <= 9; i++) {
    result[i] = 0;
  }

  for (let num of arr) {
    for (let i = 1; i <= 9; i++) {
      if (num % i === 0) {
        result[i]++;
      }
    }
  }

  console.log(result);
}


const numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
countMultiples(numbers);

