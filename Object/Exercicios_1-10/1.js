// 1. Função que retorna as chaves de um objeto em um array.
function propriedadesObjeto(objeto = {}) {
  console.log(Object.keys(objeto));
}
propriedadesObjeto({
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
});
