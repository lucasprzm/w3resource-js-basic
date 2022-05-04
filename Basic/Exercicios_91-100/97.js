// 97. Função para construir um palíndromo a partir de um pedaço de uma string.
function construirPalindromo(string) {
  var teste;
  for (var i = string.length; ; i++) {
    console.log("🚀 ~ file: 97.js ~ line 8 ~ construirPalindromo ~ i", i);
    teste = true;
    console.log(
      "🚀 ~ file: 97.js ~ line 10 ~ construirPalindromo ~ teste",
      teste
    );
    for (var j = 0; j < i - j - 1; j++) {
      console.log("🚀 ~ file: 97.js ~ line 12 ~ construirPalindromo ~ j", j);
      if (i - j - 1 < string.length && string[j] != string[i - j - 1]) {
        teste = false;
        console.log(
          "🚀 ~ file: 97.js ~ line 15 ~ construirPalindromo ~ teste",
          teste
        );
        break;
      }
    }
    if (teste) {
      for (var j = string.length; j < i; j++) {
        console.log("🚀 ~ file: 97.js ~ line 24 ~ construirPalindromo ~ j", j);
        string += string[i - j - 1];
        console.log(
          "🚀 ~ file: 97.js ~ line 21 ~ construirPalindromo ~ string",
          string
        );
      }
      return string;
    }
  }
}

console.log(construirPalindromo("abcddc"));
console.log(construirPalindromo("122"));
