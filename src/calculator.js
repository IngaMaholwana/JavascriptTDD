export const calculator = (function () {
    const add = (a, b) => { return a + b };
    const multiply = (a, b ) => {return a * b};
    const divide = (a, b ) => { return  a / b };
    const substract = (a, b ) => { return a - b };
  
    return { add, multiply, divide, substract }
  })();