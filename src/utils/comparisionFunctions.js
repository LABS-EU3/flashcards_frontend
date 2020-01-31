// compares objects by a object property
export function objectPropertyCompare(array, property) {
  return array.filter(
    (item, position, arr) =>
      arr.map(arrItem => arrItem[property]).indexOf(item[property]) ===
      position,
  );
}

export function valueCompare(array) {
  return array.filter((a, b) => array.indexOf(a) === b);
}
