export default function (cardValue, card1, card2) {
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
