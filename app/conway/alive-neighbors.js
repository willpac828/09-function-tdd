export default function aliveNeighbor(a) {
  let count = 0;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] === true) {
      count += 1;
    }
  }

  return count;
}
