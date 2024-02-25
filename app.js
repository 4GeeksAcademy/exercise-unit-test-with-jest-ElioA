const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen=function(valueInDollar){
    let valueInEuro=valueInDollar/1.07;
  
    let valueInYen= valueInEuro*156.5;
    return valueInYen
}

const fromYenToPound=function(valueInYen){

let valueInEuro=valueInYen/156.5

let valueInPound=valueInEuro*0.87
return valueInPound

}

module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound }
console.log(fromYenToPound(1000))