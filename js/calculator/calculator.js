function divide(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    else{
        return a/b
    }
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  module.exports = { divide, multiply };
  