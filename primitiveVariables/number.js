var number=3.5

//change type to int/float
console.log(parseInt(number))
console.log(parseInt("15"))

//to make a number infitite
number = Number.POSITIVE_INFINITY // or NEGATIVE_INFINITY

//check if a number is finite
console.log(isFinite(number))

//check if int/float true if integer
console.log(Number.isInteger(15))

//round a number 
number=3.458
//The parameter we give in shows which digit we will round after the point.
console.log(number.toFixed(1)) //gives the result 3.5
console.log(number.toFixed(2)) //gives the result 3.46