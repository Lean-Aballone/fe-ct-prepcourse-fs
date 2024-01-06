function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let x = 1;

  for (let i = a; i <= b; i++) {
    x *= i;
  }

  return (x == -0)? 0 : x;
}

module.exports = productoEntreNúmeros;