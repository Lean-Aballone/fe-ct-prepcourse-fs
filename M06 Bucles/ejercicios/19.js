function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let x = 0;
  for(let i = 1; i <= n; i++){
    x = x + i;
  }
  return x;
}

module.exports = sumarHastaN;
