let calculator = {}

calculator.add = (a, b) =>{
    return a+b;
}
calculator.subtract = (a, b) =>{
    return a-b;
}
calculator.divide = (a, b) =>{
    return a/b;
}
calculator.multiply = (a, b) =>{
    return a*b;
}

module.exports = calculator;