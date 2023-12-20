export function calibrationValue(arr) {
  const firstElement = arr.slice(0, 1);
  const lastElement = arr.slice(-1);
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr.length === 1) {
  //     return firstElement;
  //   }
  //   return firstElement.concat(lastElement);
  // }
  return firstElement.concat(lastElement);
}
