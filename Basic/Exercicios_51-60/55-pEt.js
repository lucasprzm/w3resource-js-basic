// 55. Programa para verificar se a quantidade de p e t são iguais em uma determinada string, somente minúsculo.
function contagem(string) {
  let p = 0;
  let t = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "p":
        p++;
        break;
      case "t":
        t++;
        break;
      default:
        break;
    }
  }
  console.log(p == t);
}
contagem("apto");
contagem("pato");
contagem("pedro");
