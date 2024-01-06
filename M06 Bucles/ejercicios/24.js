function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let text = new String(texto);
  let l = text.length; 
  let output = "";
  while(l > 0){
    output += text.charAt(l-1);
    l--;
  }
  return output;
}

module.exports = invertirTexto;