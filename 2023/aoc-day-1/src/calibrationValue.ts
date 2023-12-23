export function calibrationValue(arr: string): string {
  const firstElement: string = arr.slice(0, 1);
  const lastElement: string = arr.slice(-1);
  return firstElement.concat(lastElement);
}
