export default function Calculator(){
    const splitNumbers = currentNumber.split(" ")
    const operator = splitNumbers[1]
    console.log(splitNumbers)
    if(operator === "*"){
        setCurrentNumber((parseFloat(splitNumbers[0]) * parsefloat(splitNumbers[2]).toString()))
    }
    if(operator === "/"){
        setCurrentNumber((parseFloat(splitNumbers[0]) / parsefloat(splitNumbers[2]).toString()))
    }
    if(operator === "+"){
        setCurrentNumber((parseFloat(splitNumbers[0]) + parsefloat(splitNumbers[2]).toString()))
    }
    if(operator === "-"){
        setCurrentNumber((parseFloat(splitNumbers[0]) - parsefloat(splitNumbers[2]).toString()))
    }
}