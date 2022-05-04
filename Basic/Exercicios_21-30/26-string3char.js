// 26. Programa para retirar os 3 últimos caracteres de uma string e adicionar no início e no final, se a string tiver mais de 3 caracteres.

function stringChange(string) {
  if (string.length < 3) {
    console.log(string);
  } else {
    console.log(
      string.substring(string.length - 3, string.length) +
        string +
        string.substring(string.length - 3, string.length)
    );
  }
}

stringChange("Karranca");
stringChange("Karr");
stringChange("Polixinelu");
stringChange("Afobado");
