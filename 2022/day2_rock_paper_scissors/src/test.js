var SumArrays = /** @class */ (function () {
    function SumArrays(input) {
        this.input = input;
    }
    SumArrays.prototype.expandedArray = function (value) {
        var mappedNumber = this.input.map(function (num) { return num * value; });
        return mappedNumber;
    };
    SumArrays.prototype.sumArray = function () {
        var sum = this.input.reduce(function (a, b) { return a + b; }, 0);
        return sum;
    };
    return SumArrays;
}());
var myNumbers = [1, 2, 3, 4, 5];
var initObject = new SumArrays(myNumbers);
console.log(initObject.sumArray());
var mappedArrays = new SumArrays(myNumbers);
console.log(mappedArrays.expandedArray(2));
