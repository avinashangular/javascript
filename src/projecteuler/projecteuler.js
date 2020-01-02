export var ProjectEuler = (function() {
  function SumOfNaturalNumber(startNumber, EndNumber) {
    let result = 0;
    while (startNumber < EndNumber) {
      if (startNumber % 3 == 0 || startNumber % 5 == 0) {
        result += startNumber;
      }
      startNumber++;
    }
    return result;
  }

  function FabonciiSeries(EndNumber) {
    let startNumber = 1;
    let faboncii = [];
    let sumOfFaboncii = 0;
    while (startNumber < EndNumber) {
      if (faboncii.length > 1) {
        startNumber =
          faboncii[faboncii.length - 2] + faboncii[faboncii.length - 1];
      }
      if (startNumber < EndNumber) {
        faboncii.push(startNumber);
        if (startNumber % 2 == 0) {
          sumOfFaboncii += startNumber;
        }
      }
    }
    return sumOfFaboncii;
  }

  function LargetPrimeFactor(num) {
    if (num % 2 == 0) {
    }
    let temp = 2;
    let primeFactorList = [];
    while (num / 2 >= temp) {
      if (num % temp == 0) {
        primeFactorList.push(temp);
      }
      temp++;
    }
    return primeFactorList;
  }

  return {
    SumOfNaturalNumber: SumOfNaturalNumber,
    FabonciiSeries: FabonciiSeries,
    LargetPrimeFactor: LargetPrimeFactor
  };
})();

var result = ProjectEuler.LargetPrimeFactor(600);
console.log(result);
