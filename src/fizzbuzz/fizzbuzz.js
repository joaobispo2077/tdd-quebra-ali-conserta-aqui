const _isMultipleOf = (number, multiple) => {
  return !(number % multiple) // return 
}

const fizzbuzz = (number) => {
  if (number !== 0) {
    if ((_isMultipleOf(number, 3) && _isMultipleOf(number, 5))) return "FizzBuzz";

    if (_isMultipleOf(number, 3)) return "Fizz";

    if (_isMultipleOf(number, 5)) return "Buzz";
  }

  return number;
}

module.exports = fizzbuzz;