export default function (cardValue) {
  // for (i = 2; i < 11; i += 1) {
  //   if
  // }
  //

  if (cardValue === 'jack') {
    return 10;
  }

  if (cardValue === 'queen') {
    return 10;
  }

  if (cardValue === 'king') {
    return 10;
  }

  if (cardValue === 'ace') {
    return 11;
  }

  return parseInt(cardValue);

}
