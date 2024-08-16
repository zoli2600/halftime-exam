function fizzBuzz(num1, num2) {
  let numbers = []
  const smallerNumber = Math.min(num1, num2)
  const biggerNumber = Math.max(num1, num2) // ensures that no matter which of the two numbers is bigger, for loop always starts from the smaller one

  for (let i = smallerNumber; i <= biggerNumber; i++) {
    
    if (i % 5 === 0 && i % 3 === 0){
      numbers.push("fizzbuzz")
    }
    else if (i % 5 === 0){
      numbers.push("buzz")
    }
    else if (i % 3 === 0){
      numbers.push("fizz")
    }
    else numbers.push(i)
}
  return numbers
}

module.exports = fizzBuzz
