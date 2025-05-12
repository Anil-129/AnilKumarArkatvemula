

function printConditionalOddSeries(x) {
  const result = [];
  const count = x % 2 === 0 ? x - 1 : x;
  for (let i = 0; i < count; i++) {
    const num = 2 * i + 1;
    result.push(num);
    if (result.length === x) break;
  }
  console.log(result.join(", "));
}


printConditionalOddSeries(4); 
