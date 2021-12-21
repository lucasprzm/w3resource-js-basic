// 66. Programa para retornar o nome completo da cidade caso a string inicie com Los ou New.
function cidades(nome) {
  if (nome.substring(0, 3) == "Los") {
    console.log("Los Angeles");
  } else if (nome.substring(0, 3) == "New") {
    console.log("New York");
  } else {
    console.log("");
  }
}
cidades("Los");
cidades("New");
