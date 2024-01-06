function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  
  return parseInt(num).toString().length === 3;
}

module.exports = tieneTresDigitos;
