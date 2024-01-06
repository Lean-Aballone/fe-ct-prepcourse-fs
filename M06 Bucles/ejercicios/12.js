function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  let x = "";
  if(num % 3 == 0) x = "fizz";
  if(num % 5 == 0) x = x + "buzz";
  return (x == "") ? false : x;
}

module.exports = fizzBuzz;
