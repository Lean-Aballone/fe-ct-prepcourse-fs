function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  //return (Date(fechaNacimiento) - Date.prototype.getFullYear - Date.prototype.getDate - Date.prototype.getDay >= 18);

  var today = new Date().getFullYear();
  var age = today - new Date(fechaNacimiento).getFullYear();
  var m = today - new Date(fechaNacimiento).getMonth();
  return (((m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) ? age : age--) >= 18);
}

module.exports = esMayorDeEdad;