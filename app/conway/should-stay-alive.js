import aliveNeighbors from './alive-neighbors';

export default function stayAlive(a) {
  if (aliveNeighbors(a) >= 4 || aliveNeighbors(a) === 0) {
    return false;
  }

  return true;
}
