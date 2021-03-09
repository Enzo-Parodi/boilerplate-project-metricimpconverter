/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

// 32L => 32
// 2.4L => 2.4
// 2/3L => 0-67
// 2.4/3L => 0.8

function ConvertHandler() {
  this.getNum = function (input = 0) {
    const inputContent = [input, "/", "1"];
    let inputArray = []
    if (input.includes("/")) {
      inputArray = input.split("/");

      const [dividend, divisor] = inputArray;
      inputContent[0] = dividend;
      inputContent[2] = divisor;
    }
    let [dividendAfter, symbol, divisorAfter] = inputContent;
    if (!dividendAfter.match(/(\d)/g) || inputArray.length > 2) {
      return "invalid input";
    }

    const result =
      +dividendAfter.match(/(\d|\.)/g).join("") /
      +divisorAfter.match(/(\d|\.)/g).join("");

    return result.toFixed(2);
  };

  this.getUnit = function (input) {
    const validUnitsRegEx = /\bgal\b|\bl\b|\bmi\b|\bkm\b|\blbs\b|\bkg\b|\bGAL\b|\bL\b|\bMI\b|\bKM\b|\bLBS\b|\bKG\b/
    const unit = input.match(/[A-Z]/ig).join('')
    let result = 'Not a valid unit';
    
    if (!!unit.match(validUnitsRegEx)) {
      result = unit
    }
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    switch(initUnit) {
      case 'gal':
        result = 'L';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    switch(unit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'litres';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometres';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch(initUnit) {
      case 'gal':
        result = initNum * galToL
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
    }

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
