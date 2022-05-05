// 11. Lista todas propriedades e métodos dos objetos...
function todasPropriedades(objeto) {
  console.log(Object.getOwnPropertyNames(objeto));
}
todasPropriedades(Array);
todasPropriedades(Math);
todasPropriedades(String);
