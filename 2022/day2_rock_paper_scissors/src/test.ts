class SumArrays {
  private input: number[];

  constructor(input: number[]) {
    this.input = input;
  }
  public expandedArray(value: number) {
    const mappedNumber = this.input.map(num => num * value);
    return mappedNumber;
  }

  public sumArray() {
    const sum = this.input.reduce((a, b) => a + b, 0);
    return sum;
  }

  public appendItemToArray() {
    let emptyArray: number[] = [];
  }
}

const myNumbers: number[] = [1, 2, 3, 4, 5];

const initObject = new SumArrays(myNumbers);
console.log(initObject.sumArray());

const mappedArrays = new SumArrays(myNumbers);
console.log(mappedArrays.expandedArray(2));
