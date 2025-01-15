const calculator = require('./js/calculator/calculator.js')
function divide(a, b) {

    if (b === 0) {
        return Infinity;
  
    } else {
        return a / b;
    }
  }